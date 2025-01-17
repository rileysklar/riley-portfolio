/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/nesting"), // This enables CSS nesting
    require("tailwindcss"),
    require("autoprefixer"),
    require('tailwindcss-motion'), 

  ],
};
