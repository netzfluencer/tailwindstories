import Vue from 'vue'
import * as storybook from '../src/main'
import { addDecorator, addParameters } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import centered from '@storybook/addon-centered/vue'

import '../src/tailwind.css'

Vue.use(storybook, {})

addParameters({
  backgrounds: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'gray', value: '#d3d3d3' },
  ],
})

addParameters({
  docs: {
    inlineStories: true,
    iframeHeight: '60px',
  },
})

addDecorator(withInfo)
addDecorator(centered)

