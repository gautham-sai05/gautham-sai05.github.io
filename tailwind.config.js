/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#08111F',
        surface: '#0D1B2A',
        elevated: '#14253D',
        primary: {
          DEFAULT: '#4DA8FF',
          hover: '#73C8FF',
          muted: 'rgba(77, 168, 255, 0.12)',
        },
        text: {
          DEFAULT: '#F5F8FC',
          muted: '#B8C7D9',
          subtle: '#7A8FA6',
        },
        border: 'rgba(255, 255, 255, 0.08)',
        success: '#66D9B8',
        warning: '#F2C94C',
        error: '#FF6B6B',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-lg': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '800' }],
        'display-md': ['2.5rem', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body-md': ['1rem', { lineHeight: '1.65' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'code-sm': ['0.8125rem', { lineHeight: '1.6', fontFamily: 'var(--font-ibm-plex-mono)' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '120': '30rem',
        '160': '40rem',
      },
      maxWidth: {
        container: '1320px',
        prose: '72ch',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'blueprint-grid':
          'linear-gradient(rgba(77, 168, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(77, 168, 255, 0.04) 1px, transparent 1px)',
        'blueprint-grid-sm':
          'linear-gradient(rgba(77, 168, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(77, 168, 255, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-lg': '80px 80px',
        'grid-md': '40px 40px',
        'grid-sm': '20px 20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.35s ease-out forwards',
        'slide-up': 'slideUp 0.35s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.25s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'blink': 'blink 1.2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)',
        'card-hover': '0 4px 24px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.4)',
        'primary-glow': '0 0 24px rgba(77, 168, 255, 0.15)',
        'elevated': '0 8px 32px rgba(0, 0, 0, 0.6)',
      },
      borderRadius: {
        'card': '12px',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
    },
  },
  plugins: [],
};
