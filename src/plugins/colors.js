const chroma = require('chroma-js')

function tint(hex) {
  return chroma.mix('#fff', hex, 0.25, 'lab')
}

function fade(hex) {
  return chroma.mix('#fff', hex, 0.6, 'lab')
}

function shade(hex) {
  return chroma.mix('#000', hex, 0.75, 'lab')
}

function palette(color) {
  const hex = color.hex()
  return {
    default: hex,
    light: tint(hex).hex(),
    fade: fade(hex).hex(),
    dark: shade(hex).hex(),
  }
}

module.exports = (ciColor) => {
  const ci = chroma(ciColor)

  return {
    ci: {
      ...palette(ci),
      'key-1': ci.set('hsl.h', '+150').hex(),
    },
    error: palette(chroma.mix('#f34', ci, 0.2, 'lab')),
    info: palette(chroma.mix('#3df', ci, 0.2, 'lab')),
    warn: palette(chroma.mix('#fd0', ci, 0.2, 'lab')),
    success: palette(chroma.mix('#3e4', ci, 0.2, 'lab')),
  }
}
