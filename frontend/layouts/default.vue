<template>
  <div>
    <Header />

    <Nav />

    <nuxt />
  </div>
</template>

<script>
// Import Header component
import Header from '~/components/Header.vue'
import Nav from '~/components/Nav.vue'
export default {
  components: {
    Header,
    Nav
  }
}

</script>
