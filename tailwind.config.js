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
      keyframes: {
        appear: {
          "0%": {
            opacity: "0.6",
          },
          "50%": {
            opacity: "1",
          },
        },
        glow: {
          "30%, 70%": {
            textShadow:
              "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 55px #ff00ff, 0 0 75px #ff00ff",
          },
          "50%": {
            textShadow:
              "0 0 2px #fff, 0 0 5px #fff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 50px #ff00ff, 0 0 70px #ff00ff",
          },
        },
      },
      animation: {
        glow: "glow 4s ease-in-out",
        appear: "appear 4s ease-in-out",
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
