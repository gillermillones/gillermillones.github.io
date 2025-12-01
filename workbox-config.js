module.exports = {
	globDirectory: 'app',
	globPatterns: [
		'**/*.{tsx,css,ico}'
	],
	swDest: 'app/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};