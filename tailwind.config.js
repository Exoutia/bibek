// this file is here to activate the tailwindcss extentsion in vscode
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkmode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#27ae60",
        primary: "#3498db",
        secondary: "#f39c12",
        neutral_1: "#333333",
        neutral_2: "#f5f5f5",
        highlight: "#e74c3c",
        complementary_1: "#9b59b6",
      },
    },
  },
};
