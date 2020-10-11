const defaultTheme = require('tailwindcss/defaultTheme')

const colors = require('./src/plugins/colors')
const box = require('./src/plugins/box.js')
const container = require('./src/plugins/container.js')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        ...colors('#51C383'),
        white: {
          default: defaultTheme.colors.white,
        },
        black: {
          default: defaultTheme.colors.black,
        },
        transparent: {
          default: 'transparent',
          rgba: 'rgba(255, 255, 255, 0)',
        },
        gray: {
          ...defaultTheme.colors.gray,
          50: '#f9fafb',
        },
      },
    },
    container: (theme) => ({
      // padding and margin config for p*-c and -m*-c on different screensizes
      spacing: {
        xs: theme('spacing.4'),
        md: theme('spacing.6'),
      },
    }),
    box: (theme) => ({
      borderRadius: theme('borderRadius.lg'),
      // padding and margin config for p*-box and -m*-box on different screensizes
      spacing: {
        xs: {
          x: theme('container.spacing.xs'),
        },
      },
    }),
  },
  variants: {},
  plugins: [
    box,
    container,
  ],
}
