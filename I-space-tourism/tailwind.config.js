/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-desktop': "url('src/assets/home/background-home-desktop.jpg')"
        ,'home-tablet': "url('src/assets/home/background-home-tablet.jpg')"
        ,'home-mobile': "url('src/assets/home/background-home-mobile.jpg')"
        , "destination-desktop": "url('src/assets/destination/background-destination-desktop.jpg')"
        ,'destination-tablet': "url('src/assets/destination/background-destination-tablet.jpg')"
        ,'destination-mobile': "url('src/assets/destination/background-destination-mobile.jpg')"
        ,"crew-desktop": "url('src/assets/crew/background-crew-desktop.jpg')"
        ,'crew-tablet': "url('src/assets/crew/background-crew-tablet.jpg')"
        ,'crew-mobile': "url('src/assets/crew/background-crew-mobile.jpg')"
      },
      fontFamily: {
        'bellefair': '"Bellefair", serif;',
        'barlow': '"Barlow Condensed", sans-serif;',
      },
      colors: {
        'blk': '#0B0D17',
        'purp': '#D0D6F9',
        'wht': '#FFFFFF',
      },
      width: {
        "5.5/12": "55em"
      },
      boxShadow: {
        "circle-init": "0px 0px 0px 0px rgba(255,255,255,.1)",
        "circle-final": "0px 0px 0px 60px rgba(255,255,255,.2)",
      }
    },

  },
  plugins: [],
}