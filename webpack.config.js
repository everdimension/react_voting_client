var webpack       = require('webpack');
var autoprefixer  = require('autoprefixer');
var postcssImport = require('postcss-import');
var postcssVars   = require('postcss-simple-vars');
var postcssNested = require('postcss-nested');

var paths = {
	src: './src',
	dist: './dist',
	distAbsolute: __dirname + '/dist'
};

var config = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		paths.src + '/index.js'
	],
	output: {
		path: paths.distAbsolute,
		publicPath: '/',
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'react-hot!babel?presets[]=react,presets[]=es2015'
			},
			{
				test: /\.css$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'style!css!postcss'
			}
		]
	},

	postcss: function () {
		return [autoprefixer, postcssImport, postcssVars, postcssNested];
	},

	devServer: {
		contentBase: paths.dist,
		hot: true
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = config;
