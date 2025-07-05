/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C4DFF',
          dark: '#6B3FE6',
          light: '#9E7DFF',
        },
        secondary: {
          DEFAULT: '#00E5FF',
          dark: '#00B8CC',
          light: '#80F1FF',
        },
        dark: {
          DEFAULT: '#0F0F13',
          light: '#1A1A23',
          lighter: '#23232F',
          border: '#2A2A3A',
        },
        light: {
          DEFAULT: '#FFFFFF',
          muted: '#A0A0B9',
        },
        danger: '#FF5252',
        success: '#4CD964',
        warning: '#FFD600',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(124, 77, 255, 0.3)',
        'glow-strong': '0 0 30px rgba(124, 77, 255, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 15 L15 0 L16 0 L30 15 L30 16 L15 30 L14 30 L0 15\' fill=\'none\' stroke=\'%232A2A3A\' opacity=\'0.4\' stroke-width=\'1\'/%3E%3C/svg%3E")',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(124, 77, 255, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(124, 77, 255, 0.6)' },
        }
      }
    },
  },
  plugins: [],
} 
