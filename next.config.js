const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
};
module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
  },
});

module.exports = withImages();
