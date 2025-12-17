module.exports = {
	globDirectory: 'out',
	globPatterns: [
		'**/*.{html,js,css,json,svg,ico,png}'
	],
	globIgnores: [
    	'public/sw.js',       
    	'app/sw.js',          
    	'workbox-config.cjs',
		'public/workbox*.js'
  	],
	swDest: 'out/sw.js',
	swSrc: 'app/sw.js'
};