/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px'
      }
    },
    extend: {
      screens: {
        xsm: '350px',
        xs: '428px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        circular:
          'radial-gradient(circle, rgba(255, 249, 229, 0.9), rgba(229, 251, 240, 0.3), rgba(255, 255, 255, 255))'
      },
      colors: {
        brandBlack: '#00070B',
        brandBlue: '#3A7DFF'
      }
    }
  },
  plugins: []
}
