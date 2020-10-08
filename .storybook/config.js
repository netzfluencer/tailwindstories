import Vue from 'vue'
import { install } from '../src/main'
import { configure, addDecorator, addParameters } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import centered from '@storybook/addon-centered/vue'

install(Vue)

const context = [
  require.context('../src/elements', true, /.stories.(js|mdx)$/),
  require.context('../src/patterns', true, /.stories.(js|mdx)$/),
  require.context('../src/templates', true, /.stories.(js|mdx)$/),
]

addParameters({
  backgrounds: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'gray', value: '#d3d3d3' },
  ],
})

addDecorator(withInfo)
addDecorator(centered)

configure(context, module)
