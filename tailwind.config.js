/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      primary: ["Anderson Grotesk, sans-serif"],
      secondary: ["JetBrains Mono,ui-monospace,SFMono-Regular"]
    },
    extend: {
    },
  },
  plugins: [],
}