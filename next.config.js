// Hydrogen needs to be exported as ES modules, not CommonJS.
const withTM = require("next-transpile-modules")(["@shopify/hydrogen"]);

module.exports = withTM({
  reactStrictMode: true,
});
