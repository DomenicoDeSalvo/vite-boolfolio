<script>
import axios from 'axios'
export default {
  components: {
  },
  data() {
    return {
      projects:[]
    }
  },
  methods:{
    fetchPost(){
      axios.get('http://127.0.0.1:8000/api/projects',{
        params:{
          page: 1
        }
      })
      .then(res => {
        this.projects = res.data.results.data
      });
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
      <div class="container">
        <ul class="list-unstyled">
          <li v-for="project in projects" :key="project.id" class="my-4">
            <div class="my-1 d-flex justify-content-between">
              <span class="fw-bolder">{{ project.title }}</span>
              <span>{{ project.technology }}</span>
              <span>{{ project.starting_date }}</span>
            </div>
            <div>{{ project.description }}</div>
          </li>
        </ul>
      </div>
    </section>
  </main>

</template>

<style></style>