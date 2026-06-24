/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        cream: '#F8FAFC',
        ink: '#13112A',
        'ink-soft': '#4B4768',
        indigo: {
          DEFAULT: '#6366F1',
          soft: '#818CF8',
        },
        violet: '#8B5CF6',
        cyan: '#06B6D4',
        'deep-ink': '#1E1B4B',
      },
      fontFamily: {
        display: ['"Clash Display"', 'serif'],
        body: ['"General Sans"', 'Inter', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 9vw, 9rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.02', letterSpacing: '-0.01em' }],
      },
      backgroundImage: {
        'mesh-1': 'radial-gradient(40% 40% at 20% 20%, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0) 100%), radial-gradient(45% 45% at 85% 15%, rgba(139,92,246,0.16) 0%, rgba(139,92,246,0) 100%), radial-gradient(50% 50% at 75% 80%, rgba(6,182,212,0.14) 0%, rgba(6,182,212,0) 100%)',
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glass: '0 8px 32px rgba(99,102,241,0.08), 0 1px 1px rgba(19,17,42,0.04)',
        'glass-lg': '0 24px 64px -12px rgba(99,102,241,0.18), 0 1px 1px rgba(19,17,42,0.04)',
        soft: '0 2px 24px rgba(19,17,42,0.06)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) translateX(10px) rotate(3deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
