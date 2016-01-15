var path = require('path');
var webpack = require('webpack');

module.exports = {
	//context: path.join(__dirname, './src/example/'), This will be rewritten in gulp
	entry: {
		index: './less'
	},

	output: {
		//path: path.join(__dirname, 'static'), This will be rewritten in gulp
		filename: '[name].js',
		publicPath: '/static/',
		pathinfo: true
	},
	module: {
		loaders: [
			{
				test: /\.less$/,
				loader: 'style!css!less'
			}
		]
	}
};

//var activateGulpWatch = 1233111;
