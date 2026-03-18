import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35', // Mario red/orange
          dark: '#E55A2B',
          light: '#FF8B5C',
        },
        secondary: {
          DEFAULT: '#2D3047', // Dark blue
          light: '#3D4166',
        },
        accent: {
          DEFAULT: '#00B4D8', // Cyan blue
          light: '#48CAE4',
        },
        background: '#F8F9FA',
        surface: '#FFFFFF',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'drop-in': 'dropIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        dropIn: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config