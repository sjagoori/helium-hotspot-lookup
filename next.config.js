const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
});

module.exports = {
  future: {
    webpack5: true,
  },
};