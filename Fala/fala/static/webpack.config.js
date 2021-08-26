const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

const config = {
  mode: mode,
  target: target,

  entry: __dirname + "/scripts/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: "",
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
        // type: "asset/resource",
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[hash]-[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  devtool: "source-map",
  devServer: {
    // contentBase: "./dist",
    hot: true,
  },
};
module.exports = config;
