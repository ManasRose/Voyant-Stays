module.exports = {
  testEnvironment: "node",
  testTimeout: 30000, // mongodb-memory-server downloads/starts a real mongod; first run can be slow
  forceExit: true, // safety net against lingering connections keeping Jest open
  testPathIgnorePatterns: ["/node_modules/"],
};
