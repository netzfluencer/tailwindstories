// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, theme }) => {
  const spXs = theme('container.spacing.xs')
  const spMd = theme('container.spacing.md')

  const buildUtilities = (space) => ({
    '.px-c': {
      paddingLeft: space,
      paddingRight: space,
    },
    '.pl-c': {
      paddingLeft: space,
    },
    '.pr-c': {
      paddingRight: space,
    },
    '.-mx-c': {
      marginLeft: `-${space}`,
      marginRight: `-${space}`,
    },
    '.-ml-c': {
      marginLeft: `-${space}`,
    },
    '.-mr-c': {
      marginRight: `-${space}`,
    },
  })

  const newUtilities = {
    ...buildUtilities(spXs),

    '@screen md': {
      ...buildUtilities(spMd),
    },
  }

  addUtilities(newUtilities, {
    variants: ['responsive'],
  })
})
