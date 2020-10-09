import * as elements from './elements'
import * as patterns from './patterns'
import * as templates from './templates'

function installComponents(Vue, components) {
  Object.keys(components).forEach((name) => {
    Vue.component(name, components[name])
  })
}

const components = {
  ...elements,
  ...patterns,
  ...templates,
}

let installed = false

// // // // //
// Exports
// // // // //

// Installation of the vue-component-library
export function install(Vue, { useAllComponents }) {
  if (installed) {
    console.warn('Not installed again: The library is already installed.')
    return
  }

  installed = true
  if (!useAllComponents) return
  installComponents(Vue, components, {})
}

export default {
  install,
}

// Components Export
// export * from './elements'
// export * from './patterns'
// export * from './templates'
