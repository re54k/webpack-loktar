require.ensure([], function(require) {
	require('./index')
}, 'index');

require.ensure([], function(require) {
	require('./index2')
}, 'index2');

require.ensure([], function(require) {
	require('./index3')
}, 'index3');