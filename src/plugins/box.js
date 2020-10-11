// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, addUtilities, theme }) => {
  const spaceXsX = theme('box.spacing.xs.x')

  const buildSpacing = (space) => ({
    '.px-box': {
      paddingLeft: space,
      paddingRight: space,
    },
    '.pl-box': {
      paddingLeft: space,
    },
    '.pr-box': {
      paddingRight: space,
    },
    '.-mx-box': {
      marginLeft: `-${space}`,
      marginRight: `-${space}`,
    },
    '.-ml-box': {
      marginLeft: `-${space}`,
    },
    '.-mr-box': {
      marginRight: `-${space}`,
    },
  })

  const newUtilities = {
    '.rounded-box': {
      borderRadius: theme('box.borderRadius'),
    },
    // todo: rename or necessary ?
    '.box-shadow-none': {
      boxShadow: theme('boxShadow.none'),
    },
    '.shadow-box': {
      boxShadow: theme('boxShadow.default'),
    },
    ...buildSpacing(spaceXsX),
  }

  const newComponents = {
    '@responsive': {
      '.box': {
        backgroundColor: theme('colors.white.default'),
        boxShadow: theme('boxShadow.default'),
      },
    },
    '@screen md': {
      '.box': {
        borderRadius: theme('box.borderRadius'),
      },
    },
  }

  addComponents(newComponents)

  addUtilities(newUtilities, {
    variants: ['responsive'],
  })
})
