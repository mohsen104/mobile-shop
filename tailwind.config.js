/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#252A34",
      white: "#FFFFFF",
      gray: "#F1F1F1",
      slate: "#EEEEEE",
      yellow: "#f9bc00",
      green: "#00B8A9",
      red: "#F6416C",
      blue: "#3572EF"
    },
    extend: {
      container: {
        center: true,
      },
      borderWidth: {
        1: "1px"
      }
    },
  },
  plugins: [],
};
