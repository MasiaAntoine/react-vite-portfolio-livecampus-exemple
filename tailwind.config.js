// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
          "75%": { transform: "rotate(-5deg)" },
        },
      },
      animation: {
        shake: "shake 1s infinite",
      },
      colors: {
        yellow: {
          light: "#fefcbf",
          DEFAULT: "#fef08a",
          dark: "#fde047",
          ultradark: "rgb(244, 205, 0)",
        },
      },
    },
  },
  plugins: [],
};
