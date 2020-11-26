import Badge from './Badge.vue'

const description = {
}

export default {
  title: 'Elements|Badge',
  parameters: {
    info: {},
  },
}

export const base = () => ({
  components: { Badge },
  template: `
    <badge>Location</badge>`,
  description,
})
