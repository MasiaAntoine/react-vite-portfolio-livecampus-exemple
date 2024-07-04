// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
