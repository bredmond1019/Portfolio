const path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    clean: true,
    publicPath: "",
    chunkFilename: "[id].[hash:8].[ext]",
  },

  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"],
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|avif)$/i,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
    splitChunks: { chunks: "all" },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: path.resolve(__dirname, "dist", "vendor-manifest.json"),
    // }),
  ],

  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
  },
};

/*



plugins: 

devtool: "source-map",
devServer: {
// contentBase: "./dist",
hot: true,
},

*/
