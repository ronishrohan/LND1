/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx}'
  ],
  theme: {
    
    extend: {
      colors: {
        primary: "var(--primary)"
      },
      fontFamily: {
        "roboto" : ["RobotoFlex", "sans-serif"]
      }
    },
  },
  plugins: [],
}

