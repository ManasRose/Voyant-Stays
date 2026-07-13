const request = require("supertest");
const dbHandler = require("./setup");

let app;
let Listing;
let User;

beforeAll(async () => {
  await dbHandler.connect();
  app = require("../index");
  Listing = require("../models/listing");
  User = require("../models/user");
});

afterEach(async () => {
  await dbHandler.clearDatabase();
});

afterAll(async () => {
  await dbHandler.closeDatabase();
});

async function createListing() {
  const owner = await User.create({ email: "listingowner@test.com", username: "listingowner" });
  return Listing.create({
    title: "Reviewable Listing",
    description: "desc",
    price: 80,
    location: "Austin",
    country: "USA",
    owner: owner._id,
    geometry: { type: "Point", coordinates: [0, 0] },
  });
}

async function registerAndLogin(username, email) {
  const user = new User({ email, username });
  await User.register(user, "password123");

  const agent = request.agent(app);
  await agent
    .post("/login")
    .type("form")
    .send({ username, password: "password123" });

  return agent;
}

describe("POST /listings/:id/reviews", () => {
  test("a logged-in user can create a review", async () => {
    const listing = await createListing();
    const agent = await registerAndLogin("reviewer1", "reviewer1@test.com");

    const res = await agent
      .post(`/listings/${listing._id}/reviews`)
      .type("form")
      .send({ review: { comment: "Loved it", rating: 5 } });

    expect(res.statusCode).toBe(302);

    const updated = await Listing.findById(listing._id).populate("reviews");
    expect(updated.reviews).toHaveLength(1);
    expect(updated.reviews[0].comment).toBe("Loved it");
  });

  test("an unauthenticated request is redirected to /login, not allowed to post", async () => {
    const listing = await createListing();

    const res = await request(app)
      .post(`/listings/${listing._id}/reviews`)
      .type("form")
      .send({ review: { comment: "Should not be saved", rating: 1 } });

    expect(res.statusCode).toBe(302);
    expect(res.headers.location).toBe("/login");

    const unchanged = await Listing.findById(listing._id);
    expect(unchanged.reviews).toHaveLength(0);
  });
});

describe("DELETE /listings/:id/reviews/:reviewId", () => {
  test("the review's author can delete their own review", async () => {
    const listing = await createListing();
    const agent = await registerAndLogin("author1", "author1@test.com");

    await agent
      .post(`/listings/${listing._id}/reviews`)
      .type("form")
      .send({ review: { comment: "To be deleted", rating: 3 } });

    const withReview = await Listing.findById(listing._id).populate("reviews");
    const reviewId = withReview.reviews[0]._id;

    const res = await agent.delete(`/listings/${listing._id}/reviews/${reviewId}`);

    expect(res.statusCode).toBe(302);
    const afterDelete = await Listing.findById(listing._id);
    expect(afterDelete.reviews).toHaveLength(0);
  });

  test("a different logged-in user CANNOT delete someone else's review", async () => {
    const listing = await createListing();
    const authorAgent = await registerAndLogin("author2", "author2@test.com");

    await authorAgent
      .post(`/listings/${listing._id}/reviews`)
      .type("form")
      .send({ review: { comment: "Not yours to delete", rating: 4 } });

    const withReview = await Listing.findById(listing._id).populate("reviews");
    const reviewId = withReview.reviews[0]._id;

    const otherAgent = await registerAndLogin("intruder", "intruder@test.com");

    const res = await otherAgent.delete(
      `/listings/${listing._id}/reviews/${reviewId}`
    );

    expect(res.statusCode).toBe(302);
    expect(res.headers.location).toBe(`/listings/${listing._id}`);

    const stillThere = await Listing.findById(listing._id);
    expect(stillThere.reviews).toHaveLength(1);
  });
});
