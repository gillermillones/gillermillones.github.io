module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{svg,json,js,ico}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};