var webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    vendor: [
      //   "lodash",
      "react",
      //   "bootstrap",
      "react-dom",
      "react-refresh/runtime",
    ],
  },
  output: {
    filename: "vendor.bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "vendor_lib",
  },
  plugins: [
    new webpack.DllPlugin({
      name: "vendor_lib",
      path: path.resolve(__dirname, "dist", "vendor-manifest.json"),
    }),
  ],
};
