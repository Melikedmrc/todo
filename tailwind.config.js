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
      'BottomNav': '#C67ED2',
      'Button': '#F6F6F6',
      'Pink':'f3c4fb',
      'White': '#F5F5F5',
      'Blue': '#bde0fe',
      'Orange': '#FFC09F',
      'Yellow': '#FFEE93',
      'LightYellow': '#FCF5C7',
      'Green': '#ADF7B6',
      'Or':'#797C7B',
      'Line': '#CDD1D0'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        '215': '215px',
        '85': '85'
      },
      height: {
        '60': '60px',
      },
      borderWidth: {
        '0.5': '0.5px',
        '1': '1px',
        '0.25': '0.25px',
      },

    },
  },
  plugins: [],
}

