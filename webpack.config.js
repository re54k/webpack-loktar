var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'hidden-source-map',
	debug: true,
	context: path.join(__dirname, './src/echarts/'),
	entry: {
		parent: './parent'
	},

	output: {
		path: path.join(__dirname, 'static'),
		filename: '[name].bundle.js',
		publicPath: '/static/',
		pathinfo: true
	},
	plugins: [
		//new webpack.optimize.CommonsChunkPlugin({
		//	trunks: ['bar', 'line', 'island'],
		//	children: true,
		//	minChunks: 2
		//})
		//new webpack.ProvidePlugin({
		//	moment: "moment",
		//	day: "./day"
		//})
	],
	module: {
		loaders: [
			{
				test: /month/,
				loader: 'expose?month!imports?day=./day!exports?month'
			}
		],
		noParse: [
			/moment/,
			/map/
		]
	},

	resolve: {
		alias: {
			moment: 'moment/moment'
		}
	},

	externals: {
		'./j': 'aaa',
		b: true
	}
};

var a = 11131222111111111112111211111112111;
