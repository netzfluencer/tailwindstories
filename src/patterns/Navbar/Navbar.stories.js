import Navbar from './Navbar.vue'
import NavbarTab from './_components/NavbarTab.vue'
import NavbarTabButton from './_components/NavbarTabButton.vue'

const description = {
}

export default {
  title: 'Patterns|Navbar',
  parameters: {
    info: {},
  },
}

export const base = () => ({
  components: { Navbar, NavbarTab, NavbarTabButton },
  data() {
    return {
      showTab: false,
    }
  },
  template: `
    <navbar>
      <navbar-tab v-show="showTab" />
      <navbar-tab-button @click="showTab = !showTab">Toggle</nav-tab-button>
    </navbar>`,
  description,
})
