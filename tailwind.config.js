/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter var, ui-sans-serif, system-ui, -apple-system,BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,Noto Color Emoji",
          {
            fontFeatureSettings: '"cv02","cv03","cv04","cv11"',
            fontVariationSettings: "normal",
          },
        ],
      },
      colors: {
        primary: "#E50914",
        background: "#141414",
      },
    },
  },
  plugins: [],
};
