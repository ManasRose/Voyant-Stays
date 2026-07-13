const request = require("supertest");
const dbHandler = require("./setup");

let app;
let User;

beforeAll(async () => {
  await dbHandler.connect();
  app = require("../index");
  User = require("../models/user");
});

afterEach(async () => {
  await dbHandler.clearDatabase();
});

afterAll(async () => {
  await dbHandler.closeDatabase();
});

describe("GET /signup and /login (form rendering)", () => {
  test("GET /signup renders the signup form", async () => {
    const res = await request(app).get("/signup");
    expect(res.statusCode).toBe(200);
  });

  test("GET /login renders the login form", async () => {
    const res = await request(app).get("/login");
    expect(res.statusCode).toBe(200);
  });
});

describe("POST /signup", () => {
  test("creates a new user, logs them in, and redirects to /listings", async () => {
    const agent = request.agent(app);

    const res = await agent.post("/signup").type("form").send({
      username: "newuser1",
      email: "newuser1@test.com",
      password: "password123",
    });

    expect(res.statusCode).toBe(302);
    expect(res.headers.location).toBe("/listings");

    const saved = await User.findOne({ username: "newuser1" });
    expect(saved).toBeTruthy();
    expect(saved.email).toBe("newuser1@test.com");
  });

  test("rejects a signup with a duplicate email and redirects back to /signup", async () => {
    const existing = new User({
      email: "dupe@test.com",
      username: "firstuser",
    });
    await User.register(existing, "password123");

    const res = await request(app).post("/signup").type("form").send({
      username: "seconduser",
      email: "dupe@test.com", // same email, different username
      password: "password123",
    });

    expect(res.statusCode).toBe(302);
    expect(res.headers.location).toBe("/signup");

    // Confirms the duplicate was actually rejected, not silently created
    const count = await User.countDocuments({ email: "dupe@test.com" });
    expect(count).toBe(1);
  });
});

describe("POST /login", () => {
  test("logs in with correct credentials and redirects to /listings", async () => {
    const user = new User({
      email: "loginuser@test.com",
      username: "loginuser",
    });
    await User.register(user, "password123");

    const res = await request(app)
      .post("/login")
      .type("form")
      .send({ username: "loginuser", password: "password123" });

    expect(res.statusCode).toBe(302);
    expect(res.headers.location).toBe("/listings");
  });

  test("rejects an incorrect password and redirects back to /login", async () => {
    const user = new User({
      email: "wrongpass@test.com",
      username: "wrongpassuser",
    });
    await User.register(user, "password123");

    const res = await request(app)
      .post("/login")
      .type("form")
      .send({ username: "wrongpassuser", password: "incorrect-password" });

    expect(res.statusCode).toBe(302);
    expect(res.headers.location).toBe("/login");
  });
});

describe("GET /logout", () => {
  test("logs the user out and redirects to /listings", async () => {
    const user = new User({
      email: "logoutuser@test.com",
      username: "logoutuser",
    });
    await User.register(user, "password123");

    const agent = request.agent(app);
    await agent
      .post("/login")
      .type("form")
      .send({ username: "logoutuser", password: "password123" });

    const res = await agent.get("/logout");

    expect(res.statusCode).toBe(302);
    expect(res.headers.location).toBe("/listings");
  });
});
