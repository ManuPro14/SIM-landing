/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	"./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			backgroundImage: {
				'heroBgImage': "url(/public/img/HeroImage.jpeg)",
				'heroBgServices': "url(/public/img/bg-servicios.jpeg)"
			}
	}},
	plugins: [
		require('flowbite/plugin')
	],

}

