const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],

  devtool: "source-map",
};

/*

{
  test: /\.(s[ac]|c)ss$/i,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: { publicPath: "" },
    },
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

*/
