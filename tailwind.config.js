/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        main: {
          100: "#d5d6e9",
          200: "#abadd3",
          300: "#8283be",
          400: "#585aa8",
          500: "#2e3192",
          600: "#252775",
          700: "#1c1d58",
          800: "#12143a",
          900: "#090a1d",
        },
        sub: {
          100: "#fde1da",
          200: "#fbc4b5",
          300: "#f9a691",
          400: "#f7896c",
          500: "#f56b47",
          600: "#c45639",
          700: "#93402b",
          800: "#622b1c",
          900: "#31150e",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2e3192",
          secondary: "#f56b47",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
