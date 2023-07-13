/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Anderson Grotesk, sans-serif'],
      secondary: ['JetBrains Mono,ui-monospace,SFMono-Regular']
    },

    extend: {
      colors: {
        primary: '#7f6c55',
        secondary: '#355364',
        background: 'rgba(247,247,247,1)'
      }
    }
  },
  plugins: []
}
