/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    extend: {
      colors:{
        "primary-dark":"#16375C",
        "primary":"#BAD043",
        "primary-button":"#471B92",
        "orange-100": "#FDEBD7",
        "orange-300": "#F6B47B",
        "blue-bottom": "#2C7E90",
        "primary-blue": "#3390A4",
        "blue-100": "#D9F0F4",
        "blue-300": "#87CCD9",
        "primary-pink": "#C23567",
        "pink-50": "#FCF3F7",
        "pink-200": "#F7D3E4",
        "primary-purple": "#433888",
        "purple-50": "#EFF1FE",
        "purple-200": "#CACFFB",
        "purple-600": "#6650DB",
        "primary-orange": "#F0843C",
        "subtitle": "#383842"
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
  prefix: "tw-"
};

