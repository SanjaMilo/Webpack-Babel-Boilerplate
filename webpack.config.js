const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist/assets'),
		filename: 'bundle.js',
		publicPath: '/assets/'
	},
	// Older version (webpack 4):
	// devServer: {
	// 	contentBase: path.resolve(__dirname, 'build'),
	// 	publicPath: '/assets/'
	// },
	// New version (webpack 5):
	devServer: {
		// contentBase
		static: {
			directory: path.resolve(__dirname, 'dist')
		},
		port: 8080,
		// publicPath
		devMiddleware: {
			publicPath: "https://localhost:8080/assets/",
		},
		// hotOnly
		//hot: "only", // hot:true
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						"plugins": [
							["@babel/plugin-transform-runtime"]
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.worker\.js$/i,
				use: {
					loader: "worker-loader"
				},
			}
		]
	},
	plugins: [
		new CopyPlugin({
		  patterns: [
			// { from: "source", to: "dest" },
			// { from: "other", to: "public" },
			{
				from: path.resolve(__dirname, 'dist'),
				// ignore files or folder (To exclude files from the selection), for example player.html

				// globOptions: {
				// 	dot: true,
				// 	gitignore: true, // this will ignore the gitignored files and won't copy it in build folder (bundle.js in dist)
				// 	ignore: ["**/file.*", "**/ignored-directory/**"],
				// },
				to: path.resolve(__dirname, 'build')
			},
		  ],
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				test: /\.js(\?.*)?$/i,
				exclude: /node_modules/,
				include: /build/,
			  }),
		  // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
		  // `...`
		   new HtmlMinimizerPlugin(),
		],
	  },
	externals: {
		jquery: 'jQuery',
	}
};

// use: ['style-loader', 'css-loader'] - here the order is important and it runs from right to left. It's gonna use the css-loader to collect the css from the css file and then we use that style-loader to add css to the html document

// css-loader loads the CSS into our JS file
// style-loader adds our css into the DOM

// These are for async/await
//"@babel/plugin-transform-runtime": "^7.17.0",
//"@babel/runtime": "^7.17.8",

// RUN COMMANDS:
// npm i
// npm run dev (during development)
// npm run build (at the end for production)

//npm install --save-dev npm-build-zip 
// in package.json added in scripts: "zip": "npm-build-zip"

