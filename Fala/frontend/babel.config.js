module.exports = {
	presets: [
		["@babel/preset-react", { runtime: "automatic" }],
		"@babel/preset-env",
	],
	plugins: [
		"@babel/plugin-proposal-decorators",
		{
			legacy: true,
		},
	],
};
