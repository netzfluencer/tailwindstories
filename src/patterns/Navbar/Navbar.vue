<template>
  <nav>
    <slot />
  </nav>
</template>

<script>
export default {
  props: {
    propExample: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
