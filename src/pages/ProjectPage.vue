<script>
import axios from 'axios';
export default {
    name: 'ProjectPage',
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            project: []
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiBaseUrl + this.apiUrls.projects + "/" + this.$route.params.slug)
                .then((response) => {
                    this.project = response.data.results
                    console.log(response)
                })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <section class="mt-4">
                <h2>{{ project.description }}</h2>
                <div class="card-body">
                    <p><span class="">Date: </span>{{ project.creation_date }}</p>
                    <p><span>Description: </span>{{ project.description }}</p>
                    <p>type: {{ project.type.name }}</p>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>