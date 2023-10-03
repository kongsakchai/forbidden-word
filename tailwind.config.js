/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				xs: '533px'
			}
		},
		colors: {
			black: '#292929',
			white: '#fff',
			link: '#309ff0'
		}
	},
	plugins: []
};
