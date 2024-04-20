/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	plugins: [require('flowbite/plugin')],

	darkMode: 'selector',

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#f5f2ff',
					100: '#ede7ff',
					200: '#dfd1ff',
					300: '#c7adff',
					400: '#ae7eff',
					500: '#974aff',
					600: '#8d25ff',
					700: '#7e14ed',
					800: '#6a10c7',
					900: '#580fa3',
					950: '#230448'
				}
			}
		}
	}
};
