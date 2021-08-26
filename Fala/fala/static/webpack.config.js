const webpack = require("webpack");
const path = require("path");

const config = {
  mode: "development",
  // devtool: "eval",
  entry: __dirname + "/scripts/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
    ],
  },
};
module.exports = config;
