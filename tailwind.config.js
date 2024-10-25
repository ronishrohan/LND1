/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx}'
  ],
  theme: {
    
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "rgba(var(--background))"
      },
      fontFamily: {
        "roboto" : ["RobotoFlex", "sans-serif"],
        "hauora" : ["Hauora Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

