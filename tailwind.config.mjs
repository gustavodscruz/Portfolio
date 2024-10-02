/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'primary' : '#fefff0',
				'gdsc-red' : '#ff6258',
				'gdsc-green' : '#4CAF50 '
			},
			fontFamily: {
				'custom': ['Space Grotesk', 'sans-serif'],
			},
		},
	},
	plugins: [    
		require('@tailwindcss/typography'),
	],
}
