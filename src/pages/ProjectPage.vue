<script>
import axios from 'axios';
export default {
    name: "ProjectPage",
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
            axios.get(this.apiBaseUrl + this.apiUrls.projects + "/" + this.$route.params.slug)
                .then((response) => {
                    this.project = response.data.result;
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
    <div class="container">
        <div class="row">
            <section>
                <h2>{{ project.description }}</h2>
                <div class="card-body">
                    funziona?
                    <!-- <p><span class="">Date: </span>{{ project.creation_date }}</p>
                    <p><span>Description: </span>{{ project.description }}</p>
                    <p><span>Description: </span>{{ project.type }}</p>
                    <p><span>Description: </span>{{ project.technology }}</p> -->
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>