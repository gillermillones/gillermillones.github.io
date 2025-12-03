module.exports = {
	globDirectory: 'app',
	globPatterns: [
		'**/*.{tsx,css,js}'
	],
	swDest: 'app/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};