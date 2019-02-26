// next.config.js
const withTypescript = require("@zeit/next-typescript");
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");
const withCSS = require("@zeit/next-css");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = {
  ...withTypescript(),
  ...withNextEnv({}),
  ...withCSS({
    webpack(config) {
      //   if (process.env.ANALYZE) {
      //     config.plugins.push(
      //       new BundleAnalyzerPlugin({
      //         analyzerMode: "server",
      //         analyzerPort: 8888,
      //         openAnalyzer: true,
      //       })
      //     );
      //   }
      return config;
    },
    cssModules: true,
  }),
};
