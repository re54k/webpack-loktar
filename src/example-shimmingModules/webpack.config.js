var path = require('path');
var webpack = require('webpack');

module.exports = {
	//context: path.join(__dirname, './src/example/'), This will be rewritten in gulp
	entry: {
		index: './index'
	},

	output: {
		//path: path.join(__dirname, 'static'), This will be rewritten in gulp
		filename: '[name].js',
		chunkFilename: '[id].trunk.js',
		publicPath: '/static/',
		pathinfo: true
	},
	plugins: [
		new webpack.ProvidePlugin({
			moment: 'moment'
		})
	],
	module: {
		loaders: [
			{
				test: /time/,
				loader: 'expose?time!imports?label=>"The time is: "!exports?time'
			}
		],
		noParse: [
			/moment/
		]
	},

	resolve: {
		alias: {
			moment: 'moment/min/moment.min'
		}
	}
};

//var activateGulpWatch = 1233111;
