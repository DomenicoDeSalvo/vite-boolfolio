<script>
import { store } from './store.js'
import NavBar from './components/NavBar.vue'

export default {
  components:{
    NavBar
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@use './assets/style/general.scss';
@use 'bootstrap'
</style>
