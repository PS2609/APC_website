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
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)" },
          "25%": { boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.5)" },
          "50%": { boxShadow: "0 0 20px 10px rgba(255, 255, 255, 0.5)" },
          "75%": { boxShadow: "0 0 30px 15px rgba(255, 255, 255, 0.5)" },
        },
        "border-glow": {
          "0%": {
            borderColor: "rgba(255, 255, 255, 0)",
            borderRightColor: "rgba(255, 255, 255, 0.3)",
            borderBottomColor: "rgba(255, 255, 255, 0.7)",
            borderLeftColor: "rgba(255, 255, 255, 1)",
            boxShadow: "0 0 30px 15px rgba(255, 255, 255, 0.5)",
          },
          "25%": {
            borderColor: "rgba(255, 255, 255, 0)",
            borderBottomColor: "rgba(255, 255, 255, 0.3)",
            borderLeftColor: "rgba(255, 255, 255, 0.7)",
            borderTopColor: "rgba(255, 255, 255, 1)",
            boxShadow: "0 0 30px 15px rgba(255, 255, 255, 0.5)",
          },
          "50%": {
            borderColor: "rgba(255, 255, 255, 0)",
            borderLeftColor: "rgba(255, 255, 255, 0.3)",
            borderTopColor: "rgba(255, 255, 255, 0.7)",
            borderRightColor: "rgba(255, 255, 255, 1)",
            boxShadow: "0 0 30px 15px rgba(255, 255, 255, 0.5)",
          },
          "75%": {
            borderColor: "rgba(255, 255, 255, 0)",
            borderTopColor: "rgba(255, 255, 255, 0.3)",
            borderRightColor: "rgba(255, 255, 255, 0.7)",
            borderBottomColor: "rgba(255, 255, 255, 1)",
            boxShadow: "0 0 30px 15px rgba(255, 255, 255, 0.5)",
          },
          "100%": {
            borderColor: "rgba(255, 255, 255, 0)",
            borderBottomColor: "rgba(255, 255, 255, 0.5)",
            borderLeftColor: "rgba(255, 255, 255, 1)",
            boxShadow: "0 0 30px 15px rgba(255, 255, 255, 0.5)",
          },
        },
        appear: {
          "0%": {
            opacity: "0.6",
          },
          "50%": {
            opacity: "1",
          },
        },
        "text-glow": {
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
        "text-glow": "text-glow 4s ease-in-out",
        glow: "glow 4s ease-in-out",
        appear: "appear 4s ease-in-out",
        "border-glow": "border-glow 1s linear infinite",
        "glow-brief": "glow ease-in-out",
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
          ".text-gradient-2": {
            background: "linear-gradient(90deg, #ffffff, #75bdcd)", // Define your gradient here
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          },
          ".text-gradient-3": {
            background: "linear-gradient(0deg, #000000, #ffffff)", // Define your gradient here
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
