/**
 * Tailwind config — Foodstocks.id revamp design tokens.
 * Dipakai sebagai source-of-truth untuk Phase 2 Next.js,
 * dan di-mirror di mockups/_config.js (CDN version) untuk Phase 1.
 */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mockups/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: {
            DEFAULT: '#E30613',
            50: '#FEF2F2',
            100: '#FEE2E2',
            200: '#FECACA',
            300: '#FCA5A5',
            400: '#F87171',
            500: '#EF4444',
            600: '#E30613',
            700: '#B91C1C',
            800: '#991B1B',
            900: '#7F1D1D',
          },
          orange: {
            DEFAULT: '#FF6B1A',
            50: '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#FF6B1A',
            600: '#EA580C',
            700: '#C2410C',
            800: '#9A3412',
            900: '#7C2D12',
          },
          cream: '#FFF5EB',
          peach: '#FFE8D3',
          ink: '#0F172A',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        brand: ['Fredoka', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem, 5vw + 1rem, 5.25rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-xl':  ['clamp(2.25rem, 3.5vw + 1rem, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg':  ['clamp(1.75rem, 2.5vw + 1rem, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -4px rgba(15, 23, 42, 0.08)',
        'card': '0 8px 30px -8px rgba(15, 23, 42, 0.12)',
        'lift': '0 20px 60px -20px rgba(227, 6, 19, 0.25)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out both',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
