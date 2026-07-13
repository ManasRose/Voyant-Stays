// Optional hooks for custom logic during the load test.
// Not strictly required for the current scenarios, but kept here
// so you can extend (e.g. log auth tokens, custom assertions) without
// touching the YAML config.

module.exports = {
  logResponseTime: function (requestParams, response, context, ee, next) {
    return next();
  },
};
