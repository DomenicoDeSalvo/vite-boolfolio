<script>
import axios from 'axios'
export default {
  components: {
  },
  data() {
    return {
    }
  },
  methods:{
    fetchPost(){
      axios.get('http://127.0.0.1:8000/api/projects')
    }
  },
  created(){
    this.fetchPost()
  },
}

</script>

<template>

  <main>
    <section class="my-3">
      <div class="container">
        <h2 class="text-center ">
          I miei progetti
        </h2>
      </div>
    </section>
  </main>

</template>

<style></style>