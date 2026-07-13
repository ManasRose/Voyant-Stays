jest.mock("../models/listing");
jest.mock("../models/review");

const Listing = require("../models/listing");
const Review = require("../models/review");
const { isLoggedIn, isOwner, isReviewAuthor } = require("../middleware");

describe("isLoggedIn", () => {
  test("redirects to /login and flashes an error when not authenticated", () => {
    const req = {
      isAuthenticated: () => false,
      session: {},
      flash: jest.fn(),
      originalUrl: "/listings/new",
    };
    const res = { redirect: jest.fn() };
    const next = jest.fn();

    isLoggedIn(req, res, next);

    expect(req.session.redirectUrl).toBe("/listings/new");
    expect(req.flash).toHaveBeenCalledWith(
      "error",
      "You must be logged in to do that!"
    );
    expect(res.redirect).toHaveBeenCalledWith("/login");
    expect(next).not.toHaveBeenCalled();
  });

  test("calls next() when the user is authenticated", () => {
    const req = { isAuthenticated: () => true };
    const res = {};
    const next = jest.fn();

    isLoggedIn(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});

describe("isOwner", () => {
  test("redirects with an error flash when the current user is NOT the owner", async () => {
    const fakeOwnerId = { equals: jest.fn(() => false) };
    Listing.findById.mockResolvedValue({ owner: { _id: fakeOwnerId } });

    const req = { params: { id: "listing123" }, flash: jest.fn() };
    const res = {
      locals: { currUser: { _id: "someOtherUserId" } },
      redirect: jest.fn(),
    };
    const next = jest.fn();

    await isOwner(req, res, next);

    expect(fakeOwnerId.equals).toHaveBeenCalledWith("someOtherUserId");
    expect(req.flash).toHaveBeenCalledWith(
      "error",
      "You are not the Owner of this Listing"
    );
    expect(res.redirect).toHaveBeenCalledWith("/listings/listing123");
    expect(next).not.toHaveBeenCalled();
  });

  test("calls next() when the current user IS the owner", async () => {
    const fakeOwnerId = { equals: jest.fn(() => true) };
    Listing.findById.mockResolvedValue({ owner: { _id: fakeOwnerId } });

    const req = { params: { id: "listing123" }, flash: jest.fn() };
    const res = {
      locals: { currUser: { _id: "ownerUserId" } },
      redirect: jest.fn(),
    };
    const next = jest.fn();

    await isOwner(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.redirect).not.toHaveBeenCalled();
  });
});

describe("isReviewAuthor", () => {
  test("redirects when the current user did NOT author the review", async () => {
    const fakeAuthorId = { equals: jest.fn(() => false) };
    Review.findById.mockResolvedValue({ author: { _id: fakeAuthorId } });

    const req = {
      params: { id: "listing1", reviewId: "review1" },
      flash: jest.fn(),
    };
    const res = {
      locals: { currUser: { _id: "notTheAuthor" } },
      redirect: jest.fn(),
    };
    const next = jest.fn();

    await isReviewAuthor(req, res, next);

    expect(req.flash).toHaveBeenCalledWith(
      "error",
      "You did not create this Review"
    );
    expect(res.redirect).toHaveBeenCalledWith("/listings/listing1");
    expect(next).not.toHaveBeenCalled();
  });

  test("calls next() when the current user IS the review author", async () => {
    const fakeAuthorId = { equals: jest.fn(() => true) };
    Review.findById.mockResolvedValue({ author: { _id: fakeAuthorId } });

    const req = {
      params: { id: "listing1", reviewId: "review1" },
      flash: jest.fn(),
    };
    const res = {
      locals: { currUser: { _id: "theAuthor" } },
      redirect: jest.fn(),
    };
    const next = jest.fn();

    await isReviewAuthor(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.redirect).not.toHaveBeenCalled();
  });
});
