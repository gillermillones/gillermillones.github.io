module.exports = {
	globDirectory: '.',
	globPatterns: [
		'public/**/*.{svg,json,js,ico}',
    	'.next/static/**/*.{js,css,map}'
	],
	globIgnores: [
    	'public/sw.js',       
    	'app/sw.js',          
    	'workbox-config.cjs',
		'public/workbox*.js'
  	],
	swDest: 'public/sw.js',
	swSrc: 'app/sw.js'
};