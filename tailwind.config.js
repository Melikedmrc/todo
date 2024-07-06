/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}", // tüm src klasörünü ekliyoruz
  ],
  theme: {
    extend: {
      colors: {
      'Input': '#FDFDFD',
      'Placeholder': '#1E1C1C80',
      'Title': '#C67ED2',
      'Button': '#F6F6F6',
      },
    },
  },
  plugins: [],
}

