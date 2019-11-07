<template>
  <div>
    <Header />

    <nuxt />
  </div>
</template>

<script>
// Import your new Header component
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
