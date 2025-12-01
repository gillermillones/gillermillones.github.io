module.exports = {
	globDirectory: 'root',
	globPatterns: [
		'**/*.html'
	],
	swDest: 'root/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};