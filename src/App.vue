<script>
import { store } from './store.js'

export default {
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/portfolio">Portfolio</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@use './assets/style/general.scss';
@use 'bootstrap'
</style>
