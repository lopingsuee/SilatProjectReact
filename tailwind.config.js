// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{ 
        'custom': '500px',
       
      },
      width:{
        'custom1': '350px',
      },
      backgroundImage: {
        'logo': "url('/srMAN.jpg')",
      },
    },
  },
  plugins: [],
}
