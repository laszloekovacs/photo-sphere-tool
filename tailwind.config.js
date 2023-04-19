/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Open Sans', 'sans-serif']
		},
		extend: {
			colors: {
				primary: '#ffffff',
				secondary: '#000000',
				neutral: 'rgb(51 65 85)',
				muted: 'rgb(51 65 85)'
			}
		}
	},
	plugins: []
}
