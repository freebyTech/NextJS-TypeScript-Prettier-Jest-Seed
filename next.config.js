// next.config.js
const withTypescript = require("@zeit/next-typescript");
require("dotenv").config();
const withCSS = require("@zeit/next-css");
//const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = withTypescript(
  withCSS({
    webpack(config) {
      config.plugins = config.plugins || [];
      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, ".env"),
          systemvars: true,
        }),
      ];
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
  })
);
