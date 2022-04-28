module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],

	//  daisyUI config (optional)
	daisyui: {
		styled: true,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: '',
		darkTheme: 'dark',
	},
};

// module.exports = {
// 	important: true,
// 	// Active dark mode on class basis
// 	darkMode: 'class',
// 	i18n: {
// 		locales: ['en-US'],
// 		defaultLocale: 'en-US',
// 	},
// 	purge: {
// 		content: ['./pages/**/*.tsx', './components/**/*.tsx'],
// 		// These options are passed through directly to PurgeCSS
// 	},
// 	theme: {
// 		extend: {
// 			backgroundImage: (theme) => ({
// 				check: "url('/icons/check.svg')",
// 				landscape: "url('/images/landscape/2.jpg')",
// 			}),
// 		},
// 	},
// 	variants: {
// 		extend: {
// 			backgroundColor: ['checked'],
// 			borderColor: ['checked'],
// 			inset: ['checked'],
// 			zIndex: ['hover', 'active'],
// 		},
// 	},
// 	plugins: [require('daisyui')],
// 	future: {
// 		purgeLayersByDefault: true,
// 	},

// themes: [
// 	'light',
// 	'dark',
// 	'cupcake',
// 	'bumblebee',
// 	'emerald',
// 	'corporate',
// 	'synthwave',
// 	'retro',
// 	'cyberpunk',
// 	'valentine',
// 	'halloween',
// 	'garden',
// 	'forest',
// 	'aqua',
// 	'lofi',
// 	'pastel',
// 	'fantasy',
// 	'wireframe',
// 	'black',
// 	'luxury',
// 	'dracula',
// 	'cmyk',
// 	'autumn',
// 	'business',
// 	'acid',
// 	'lemonade',
// 	'night',
// 	'coffee',
// 	'winter',
// ],
