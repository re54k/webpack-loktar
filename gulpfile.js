var path = require('path');
var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require("gulp-util");
var exec = require('child_process').exec;
var configPath;

gulp.task('default', ['webpack'], function() {
	gulp.watch([configPath, './src/**/*.js'], ['webpack']);
});


gulp.task("webpack", function(callback) {
	var cp = gutil.env.cp || '';
	configPath = path.join(__dirname, cp, 'webpack.config.js');
	gutil.log('Config path: ' + configPath);

	exec('npm run clean', function(err) {
		if (err) return callback(err);
		var config = require(configPath);

		if ( cp ) { // Rewrite the path
			config.context = path.join(__dirname, cp);
			config.output.path = path.join(__dirname, 'static', path.relative('src', cp));
		}

		webpack(config, function(err, stats) {
			if(err) throw new gutil.PluginError("webpack", err);
			gutil.log("[webpack]", stats.toString());
			callback();
		});
	});
	delete require.cache[require.resolve(configPath)];
});