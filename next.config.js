const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

module.exports = {
  reactStrictMode: true,
  env: {
    // NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
};
module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
  },
});
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        net: "empty",
        tls: "empty",
        dns: "empty",
      };
    }

    return config;
  },
};
module.exports = withImages();
