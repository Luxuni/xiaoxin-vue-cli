const { default: plugin } = require('tailwindcss')

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        page: '1450px',
      },
      colors: {
        'xx-blue': '#62569F',
        'xx-bgcolor': 'var(--bgcolor)',
        'xx-tcolor': 'var(--tcolor)',
      },
      screens: {},
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        '.el-button': {
          'background-color': 'var(--el-button-bg-color,val(--el-color-white))',
        },
      })
    },
    require('@tailwindcss/line-clamp'),
  ],
  variants: {
    lineClamp: ['responsive', 'hover'],
  },
}
