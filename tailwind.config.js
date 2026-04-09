/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./public/index.html",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xxxs: "320px",
        xxs: "480px",
      },
      transitionProperty: {
        transform: "transform",
      },
      height: {
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
        "screen-minus-4rem": "calc(100vh - 4rem)",
        "screen-minus-8rem": "calc(100vh - 8rem)",
        "screen-minus-12rem": "calc(100vh - 12rem)",
        "screen-minus-16rem": "calc(100vh - 16rem)",
        "screen-minus-20rem": "calc(100vh - 20rem)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "night",
      "dim",
      "lemonade",
      "autumn",
      "dracula",
      "valentine",
      "retro",
      "cyberpunk",
      "forest",
      "aqua",
      "lofi",
    ],
  },
  safelist: [
    "divider-default",
    "divider-primary",
    "divider-secondary",
    "divider-accent",
    "divider-success",
    "divider-warning",
    "divider-info",
    "divider-error",
  ],
};
