/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#1F3A36', soft: '#4A5C58' },
        jade: { DEFAULT: '#6B9080', deep: '#4F7568' },
        seal: '#B23A3A',
        gold: '#B8924A',
        hairline: '#E6E2D9',
        muted: '#8A8076',
        rice: '#F7F4EC',
        mist: '#F2F5F3'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        cn: ['"Noto Serif SC"', 'serif']
      },
      maxWidth: {
        site: '1080px'
      },
      boxShadow: {
        soft: '0 4px 24px rgba(31, 58, 54, 0.08)',
        lift: '0 12px 40px rgba(31, 58, 54, 0.14)'
      },
      letterSpacing: {
        tightest: '-0.02em',
        wider2: '0.12em',
        widest2: '0.22em'
      }
    }
  },
  plugins: []
};
