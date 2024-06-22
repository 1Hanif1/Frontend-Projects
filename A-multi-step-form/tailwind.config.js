/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "display": `Ubuntu, sans-serif`,
      },
      gridTemplateColumns: {
        "navigation-item": "1fr 2fr",
        "addons-item": "1fr 3fr 1fr"
      },
      colors: {
        "marine-blue": "hsl(213, 96%, 18%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "strawberry-red": "hsl(354, 84%, 57%)",
        "cool-gray": "hsl(231, 11%, 63%)",
        "light-gray": "hsl(229, 24%, 87%)",
        "magnolia": "hsl(217, 100%, 97%)",
        "alabaster": "hsl(231, 100%, 99%)",
        "white": "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        "sidebar-desktop": "url('src/assets/images/bg-sidebar-desktop.svg')",
        "sidebar-mobile": "url('src/assets/images/bg-sidebar-mobile.svg')",
      }
    },
  },
  plugins: [],
}