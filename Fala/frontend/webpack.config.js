const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	mode: "development",
	entry: __dirname + "/src/index.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js",
		clean: true,
		publicPath: "",
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
				test: /\.(js|jsx)?/,
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
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin()],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html"),
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
	],

	devtool: "source-map",
};

/*



plugins: 

devtool: "source-map",
devServer: {
// contentBase: "./dist",
hot: true,
},

*/
