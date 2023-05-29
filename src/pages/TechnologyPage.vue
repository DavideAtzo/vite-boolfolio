<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'TechnologyPage',
    components: {
        ProjectCard
    },
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            technology: null,
        }
    },
    methods: {
        getTechnology() {
            axios.get(this.apiBaseUrl + `/technologies/${this.$route.params.slug}`)
                .then((response) => {
                    this.technology = response.data.results
                    console.log(response)
                })
        }
    },
    created() {
        this.getTechnology();
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                this.getTechnology();
            }
        )
    }
}
</script>

<template>
    <section v-if="technology">
        <div class="container">
            <h1 class="mt-5 mb-3">Technology Page</h1>
            <div class="row my-4 gy-4">
                <div class="card col-md-3" v-for="project in technology.projects">
                    <ProjectCard :project="project"></ProjectCard>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>