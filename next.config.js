require("dotenv").config();
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  env: {
    SPACE_ID: process.env.SPACE_ID,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
});
