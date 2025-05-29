/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  extend: {
  animation: {
    marquee: 'scrollMarquee 20s linear infinite',
  },
}

}

