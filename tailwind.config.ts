import { type Config } from 'tailwindcss'

const tailwindConfig: Config = {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    extend: {
      screens: {
        mob: { min: '1px', max: '700px' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default tailwindConfig
