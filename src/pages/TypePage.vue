<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'TypePage',
    components: {
        ProjectCard
    },
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            type: null,
        }
    },
    methods: {
        getTypes() {
            axios.get(this.apiBaseUrl + `/types/${this.$route.params.slug}`)
                .then((response) => {
                    this.type = response.data.results
                })
        }
    },
    created() {
        this.getTypes();
    }
}
</script>

<template>
    <section v-if="type">
        <div class="container">
            <h1 class="mt-5 mb-3">Type Page</h1>
            <div class="row my-4 gy-4">
                <div class="card col-md-3" v-for="project in type.projects">
                    <ProjectCard :project="project"></ProjectCard>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>