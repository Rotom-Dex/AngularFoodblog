/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'first': "url('src/assets/images/first.jpg')",
        'second': "url('src/assets/images/second.jpg')",
        'third': "url('src/assets/images/third.jpg')",
        'fourth': "url('src/assets/images/fourth.jpg')",
      }

    },
  },
  plugins: [],
}
