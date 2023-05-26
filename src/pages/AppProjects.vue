<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: "AppProjects",
    components: {
        ProjectCard
    },
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            projects: []
        }
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
};
</script>
<template>
    <main>
        <div class="container">
            <div class="row g-5 mt-4">
                <div class="card col-md-3" v-for="project in projects">
                    <ProjectCard :project="project"></ProjectCard>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>