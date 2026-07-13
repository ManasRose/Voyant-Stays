const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

let mongod;

/**
 * Starts an in-memory MongoDB instance and points the app at it.
 * Must be called BEFORE requiring '../index', since index.js reads
 * process.env.ATLASDB_URL synchronously at require-time (for the
 * connect-mongo session store).
 */
module.exports.connect = async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  process.env.ATLASDB_URL = uri;
  process.env.NODE_ENV = "test";
  process.env.SECRET = process.env.SECRET || "test-secret-not-for-production";

  await mongoose.connect(uri);
  return uri;
};

module.exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  if (mongod) {
    await mongod.stop();
  }
};

module.exports.clearDatabase = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
};
