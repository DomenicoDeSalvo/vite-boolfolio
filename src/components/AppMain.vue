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
          page: 1,
          perPage: 9
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
        <div class="row row-cols-3">
          <div v-for="project in projects" :key="project.id" class="col my-4 d-flex align-items-stretch">
            <div class="card flex-fill">
              <div class="card-body flex-column d-flex">
                <h5 class="card-title">{{ project.title }}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
                <p class="card-text flex-grow-1">{{ project.description }}</p>
                <a href="#" class="card-link">{{ project.link }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<style></style>