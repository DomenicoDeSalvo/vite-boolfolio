<script>
import axios from 'axios'
export default {
  components: {
  },
  data() {
    return {
      projects:[],
      currentPage: 1,
      lastPage: null
    }
  },
  methods:{
    fetchPost(){
      axios.get('http://127.0.0.1:8000/api/projects',{
        params:{
          page: this.currentPage,
          perPage: 6
        }
      })
      .then(res => {
        this.projects = res.data.results.data
        this.lastPage = res.data.results.last_page
      });
    },
    changePage(n){
      if(n===this.currentPage) return
      this.currentPage = n
      this.fetchPost()
    },
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
                <RouterLink class="text-secondary" :to="{name:'project', params:{slug:project.slug}}">
                  <h5 class="card-title">{{ project.title }}</h5>
                </RouterLink>
                <h6 class="card-subtitle mb-2 text-body-secondary">{{ project.starting_date }}</h6>
                <p class="card-text flex-grow-1">{{ project.description }}</p>
                <div class="d-flex justify-content-between">
                  <ul class="list-unstyled gap-3 d-flex">
                    <li class="fst-italic" v-for="tech in project.technologies" :key="tech.id">
                      {{ tech.name }}
                    </li>
                  </ul>
                  <span class="bolder" v-if="project.type">
                    {{ project.type.name }}
                  </span>
                </div>
                <a href="#" class="card-link">{{ project.link }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="lastPage > 1" class="container">
        <ul class=" list-unstyled gap-3 d-flex justify-content-center">
          <li @click="changePage(n)" v-for="n in lastPage" :key="n"  class="change_page" :class="n === currentPage ? 'text-danger' : ''">{{ n }}</li>
        </ul>
      </div>
    </section>
  </main>

</template>

<style lang="scss" scoped>
  .change_page{
    cursor: pointer;
  }

</style>