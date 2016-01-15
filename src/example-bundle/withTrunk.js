var day = require('./day');
var month = require('./month');


require.ensure([], function(require) {
	var year = require('./year');
	document.write([year, month, day].join('-'));
});
