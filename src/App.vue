<script>
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      store,
    }
  },
}

</script>

<template>

  <div id="app">
    <AppHeader/>
    <AppMain/>
    

  </div>

</template>

<style lang="scss">
@use './assets/style/general.scss';
@use 'bootstrap'
</style>
