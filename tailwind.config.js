/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        float: "float 8s ease-in-out infinite",
        move: "move 10s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
        },
        move: {
          "0%, 100%": { transform: "translateY(60px)" },
          "50%": { transform: "translateY(-80px)" },
        },
      },
      colors: {
        "text-color": "#01A273",
        "custom-left": "#01A273",
        "custom-right": "#04D178",
      },
    },
  },
  plugins: [animate],
};
