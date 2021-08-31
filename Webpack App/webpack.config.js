const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,

  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },

  module: {
    rules: [
      // JavaScript
      // {
      //   test: /\.(js|jsx)?/,
      //   exclude: /node_modules/,
      //   use: "babel-loader",
      // },
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/i,
      //   type: "asset/resource",
      // },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/template.html"), // template file
      filename: "index.html", // output file
    }),
    new CleanWebpackPlugin(),
  ],
};
