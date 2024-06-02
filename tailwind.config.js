/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Monda: ["Monda", "sans-serif"],
      },
      backgroundImage:{
        'hero-bg':"url('./src/images/background1.png')"

      },
    },
  },
  plugins: [require("daisyui")],
};
