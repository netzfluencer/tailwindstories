// This file is similar to the standard tailwind.config.js
// The difference is that the standard config is exporting an object
// This file is exporting a method which is returning the object

// The method enables to setup a custom primary color easily without digging
// into tailwind configuration.

// If you still need to do more advanced configuration you can spread the
// returned object into your desired configuration

const defaultTheme = require('tailwindcss/defaultTheme')

const colors = require('./src/plugins/colors')
const box = require('./src/plugins/box.js')
const container = require('./src/plugins/container.js')

module.exports = (conf) => {
  const { color } = conf || {}
  return {
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
      defaultLineHeights: true,
      standardFontWeights: true,
    },
    purge: [],
    theme: {
      extend: {
        colors: {
          ...colors(color || '#41B883'),
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
      // padding and margin config for px-c and -mx-c on different screensizes
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
            x: theme('spacing.4'),
            y: theme('spacing.6'),
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
}
