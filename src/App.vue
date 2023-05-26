<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/ProjectCard.vue';
export default {
  name: 'App',
  data() {
    return {
      apiBaseUrl: 'http://127.0.0.1:8000/api',
      apiUrls: {
        projects: '/projects'
      },
      projects: []
    }
  },
  components: {
    AppHeader,
    ProjectCard
  },
  methods: {
    getProjects() {
      axios.get(this.apiBaseUrl + this.apiUrls.projects)
      .then((response) => {
        this.projects = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
  created() {
    this.getProjects();
  }
}
</script>

<template>
  <AppHeader />
  <ProjectCard :data="projects"/>
</template>


<style>
</style>
