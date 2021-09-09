var webpack = require("webpack");
var path = require("path");
module.exports = {
  entry: {
    vendor: ["./vendor"],
  },
  output: {
    filename: "vendor.bundle.js",
    path: __dirname + "/dist",
    library: "vendor_lib",
  },
  plugins: [
    new webpack.DllPlugin({
      name: "vendor_lib",
      path: path.join(__dirname, "dist", "vendor-manifest.json"),
    }),
  ],
};
