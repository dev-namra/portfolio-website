/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-outer': '4px 4px 10px rgba(0, 0, 0, 0.1), inset 0 0 6px rgba(0, 0, 0, 0.04)',
      },
      fontFamily: {
        'darker-grotesque': ['Darker Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



