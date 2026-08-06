import type { Config } from 'tailwindcss'

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E7F3F8',
          100: '#D4E8F7',
          200: '#B3D9F2',
          300: '#7DC4EA',
          400: '#00BCF2',
          500: '#005A9E',
          600: '#0078D4',
          700: '#005A9E',
          800: '#003B7E',
          900: '#001F5E',
        },
        azure: '#00BCF2',
        'light-blue': '#E7F3F8',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'azure': '0 2px 10px rgba(0, 120, 212, 0.15)',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
