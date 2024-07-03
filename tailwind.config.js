/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Monda: ["Monda", "sans-serif"],
        Goldman: ["Goldman", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Cutive: ["Cutive", "sans-serif"],
        Mono: ["Roboto Mono", "sans-serif"],
      },
      backgroundImage: {
        "hero-bg": "url('./src/images/background1.png')",
      },
      screens: {
        'vsm': '500px',
        'sm':"640px",
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
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
            boxShadow: "0 0 30px 15px rgba(255, 255, 255, 0.5)",
          },
          "25%": {
            boxShadow: "0 0 30px 15px rgba(255, 255, 255, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 30px 15px rgba(255, 255, 255, 0.5)",
          },
          "75%": {
            boxShadow: "0 0 30px 15px rgba(255, 255, 255, 0.5)",
          },
          "100%": {
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
          ".my-rotate-y-180": {
            transform: "rotateY(180deg)",
          },
          ".preserve-3d": {
            transformStyle: "preserve-3d",
          },
          ".perspective": {
            perspective: "1000px",
          },
          ".backface-hidden": {
            backfaceVisibility: "hidden",
          },
          ".swiper-wrapper": {
            width: "100%",
            "-webkit-transition-timing-function": "linear !important",
            "transition-timing-function": "linear !important",
            position: "relative",
          },
          ".swiper-pagination-bullet": {
            background: "#4f46e5",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
