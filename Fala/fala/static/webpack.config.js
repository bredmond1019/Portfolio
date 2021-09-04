const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    publicPath: "/dist/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"],
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
        type: "asset/resource",
        // use: [
        //   {
        //     loader: "url-loader",
        //     options: {
        //       limit: 8192,
        //       name: "[hash]-[name].[ext]",
        //     },
        //   },
        // ],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "scripts", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],

  devtool: "source-map",
  devServer: {
    // contentBase: "./dist",
    hot: true,
  },
};
module.exports = config;
