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
        // Super Mario Theme Colors
        mario: {
          red: '#e8181b',
          'red-dark': '#b5100e',
          blue: '#1565c8',
          'blue-dark': '#0d47a1',
          yellow: '#f7c800',
          'yellow-dark': '#c9a000',
          green: '#2e9e3c',
          'green-dark': '#1a6e26',
          brown: '#a0620a',
          cream: '#fef5d4',
          sky: '#5db8f5',
          'sky-light': '#a8d8f8',
          ground: '#c8851a',
        },
        primary: {
          DEFAULT: '#e8181b', // Mario red
          dark: '#b5100e',
          light: '#ff4444',
        },
        secondary: {
          DEFAULT: '#1a0a00', // Mario black
          light: '#333333',
        },
        accent: {
          DEFAULT: '#f7c800', // Mario yellow
          light: '#ffdd44',
          dark: '#c9a000',
        },
        background: '#f5f5f5',
        foreground: '#333333',
        surface: '#FFFFFF',
      },
      fontFamily: {
        'fredoka': ['Fredoka One', 'cursive'],
        'nunito': ['Nunito', 'sans-serif'],
        // Keep old fonts for compatibility
        'bebas': ['Fredoka One', 'Bebas Neue', 'sans-serif'],
        'barlow': ['Nunito', 'Barlow', 'sans-serif'],
        'barlow-condensed': ['Fredoka One', 'Barlow Condensed', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'drop-in': 'dropIn 0.5s ease-out',
        'block-bob': 'blockBob 2s ease-in-out infinite',
        'cloud-float': 'cloudFloat 30s linear infinite',
        'coin-float': 'coinFloat 3s ease-in-out infinite',
        'ticker': 'ticker 28s linear infinite',
        'pop-in': 'popIn 0.6s cubic-bezier(0.17, 0.67, 0.35, 1.5)',
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
        blockBob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        cloudFloat: {
          '0%': { transform: 'translateX(-250px)' },
          '100%': { transform: 'translateX(110vw)' },
        },
        coinFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(18px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
      boxShadow: {
        'mario-btn': '0 5px 0 var(--tw-shadow-color)',
        'mario-btn-pressed': '0 2px 0 var(--tw-shadow-color)',
      },
    },
  },
  plugins: [],
}
export default config