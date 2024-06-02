/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Monda: ["Monda", "sans-serif"],
        Goldman: ["Goldman", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "hero-bg": "url('./src/images/background1.png')",
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-gradient": {
            background: "linear-gradient(90deg, #70ff00, #ffffff)", // Define your gradient here
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
