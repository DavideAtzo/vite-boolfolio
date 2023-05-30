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
            project: null,
            isError: false,
            errorMessage: null
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiBaseUrl + this.apiUrls.projects + "/" + this.$route.params.slug)
                .then((response) => {
                    this.project = response.data.results
                }).catch((error) => {
                    console.log(error);
                    if (error.response.status === 404) {
                        this.$router.push({ name: 'not-found' });
                    }
                    this.isError = true;
                    this.errorMessage = error.message;
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
            <section class="mt-4" v-if="project">
                <h2>{{ project.project_title }}</h2>
                <div class="card-body">
                    <p><span class="">Date: </span>{{ project.creation_date }}</p>
                    <p><span>Description: </span>{{ project.description }}</p>
                    <p v-if="project.type && project.type.name">Type: {{ project.type.name }}</p>
                    <p v-else>Type: No select type</p>
                    <div>Technologies:
                        <span v-for="technology in project.technologies">
                           {{ technology.name }},
                        </span>
                    </div>
                    <div class="mt-4">
                        <h3>Comments:</h3>
                        <div v-for="comment in project.comments">
                            <h4>{{ comment.author }}</h4>
                            <p>{{ comment.content }}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>