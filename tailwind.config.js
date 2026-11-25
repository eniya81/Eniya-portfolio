/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080B0A',
        surface: '#101512',
        accent: '#4ADE80',
        accent2: '#22C55E',
        ink: '#F8FAFC',
        muted: '#A1A1AA',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 30px -5px rgba(74,222,128,0.35)',
        glowSm: '0 0 18px -4px rgba(74,222,128,0.30)',
      },
    },
  },
  plugins: [],
}
