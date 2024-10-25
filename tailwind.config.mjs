/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		animation: {
		  fadeInFast: 'fadeIn 0.5s ease-in-out',
		  fadeInSlow: 'fadeIn 2s ease-in-out',
		  bounceShort: 'bounce 0.5s infinite',
		  bounceLong: 'bounce 1.5s infinite',
		  rotate: 'rotate 3s linear infinite', // Un ejemplo de rotación continua
		},
		keyframes: {
		  fadeIn: {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' },
		  },
		  bounce: {
			'0%, 100%': { transform: 'translateY(0)' },
			'50%': { transform: 'translateY(-10px)' },
		  },
		  rotate: {
			'0%': { transform: 'rotate(0deg)' },
			'100%': { transform: 'rotate(360deg)' },
		  },
		},
	  },
	},
	plugins: [],
  };
  
  