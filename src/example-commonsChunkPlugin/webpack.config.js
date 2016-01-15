var path = require('path');
var webpack = require('webpack');

module.exports = {
	//context: path.join(__dirname, './src/example/'), This will be rewritten in gulp
	//entry: { // commons
	//	index: './commons/index',
	//	index2: './commons/index2',
	//	index3: './commons/index3'
	//},

	//entry: { // vendor
	//	index: './vendor/index',
	//	vendor: ['./day', './month', './year']
	//},

	entry: { // parent
		parent: './parent/parent'
	},

	output: {
		//path: path.join(__dirname, 'static'), This will be rewritten in gulp
		filename: '[name].js',
		chunkFilename: '[id].trunk.js',
		publicPath: '/static/',
		pathinfo: true
	},
	plugins: [
		//new webpack.optimize.CommonsChunkPlugin({ // commons
		//	name: 'commons',
		//	minChunks: 2,
		//	chunks: ['index2', 'index3']
		//})

		//new webpack.optimize.CommonsChunkPlugin({ // vendor
		//	name: 'vendor',
		//	minChunks: Infinity
		//})

		new webpack.optimize.CommonsChunkPlugin({ // parent
			children: true,
			minChunks: 2,
			async: true
		})
	]
};

//var activateGulpWatch = 12323;
