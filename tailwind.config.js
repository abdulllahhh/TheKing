module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#18223A",
        },
        gold: {
          DEFAULT: "#C4A052",
        },
      },
      fontFamily: {
        luxury: ['Inter', 'serif'],
      },
      boxShadow: {
        luxe: '0 6px 32px 0 rgba(24,34,58,0.16)',
      },
      borderRadius: {
        xl: '1.25rem',
      },
    },
  },
  plugins: [],
};