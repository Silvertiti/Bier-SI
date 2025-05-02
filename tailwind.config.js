/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  content: ["./src/**/*.{html,js,astro,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: "#023551", // violet indigo
        accent: "#ffb14c", // bleu clair
      },
    },
  },
  plugins: [],
};
