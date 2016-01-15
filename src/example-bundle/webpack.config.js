var path = require('path');
var webpack = require('webpack');

module.exports = {
	//context: path.join(__dirname, './src/example/'), This will be rewritten in gulp
	entry: {
		normal: './normal',
		withTrunk: './withTrunk'
	},

	output: {
		//path: path.join(__dirname, 'static'), This will be rewritten in gulp
		filename: '[name].js',
		chunkFilename: '[id].trunk.js',
		publicPath: '/static/',
		pathinfo: true
	},
	plugins: [
		//new webpack.optimize.CommonsChunkPlugin({
		//	name: 'vendor'
		//})
	]
};

//var activateGulpWatch = 1233;
