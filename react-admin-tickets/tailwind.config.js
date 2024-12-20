/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Chỉ định các file để Tailwind có thể áp dụng
  ],
  theme: {
      extend: {
        colors: {
          main: "#ee0033"
        }
      },
  },
  plugins: [],
};