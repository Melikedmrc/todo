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
      'Placeholder': '#1E1C1C',
      'Title': '#C67ED2',
      'BottomNav': '#C67ED2',
      'Button': '#F6F6F6',
      'PinkColor':'#f3c4fb',
      'PinkSecond':'#DEB5E4',
      'CustomPink': '#F4D8F9',
      'Purple':'#BA68C8',
      'White': '#F5F5F5',
      'Blue': '#bde0fe',
      'BlueSecond': '#ABDDF4',
      'Orange': '#FFC09F',
      'Yellow': '#FFEE93',
      'LightYellow': '#FCF5C7',
      'Green': '#ADF7B6',
      'GreenSecond':'#D9D9D',
      'Or':'#797C7B',
      'Line': '#CDD1D0',
      'custom-border': '#1e1c1c'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        '144': '144px',
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

