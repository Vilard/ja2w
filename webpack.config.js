let path = require("path");

let conf = {
	entry: ["./src/index.js", 
	/*"@babel/polyfill"*/],
	output: {
		path: path.resolve(__dirname, "./dist/"),
		filename: "main.js",
		publicPath: "dist/"
	}, 
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use:{
					loader: "babel-loader",
					options: {
          	presets: ["@babel/preset-env"],
          	plugins: ['@babel/plugin-transform-runtime']
          }
				}
				// exclude: "/node_modules"
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
				// exclude: "/node_modules"
			}
		]
	},
	devtool: "eval-sourcemap"

};

module.exports = (env, options) => {
	
	let production = options.mode === "production";

	conf.devtool = production ? false : "eval-sourcemap";

	return conf;
}