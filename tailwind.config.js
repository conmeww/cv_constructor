 //@type {import('tailwindcss').Config}

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'blue-custom': '#1a91f0',

      }
    }
  },
  plugins: [require("tw-elements/dist/plugin")]
};
