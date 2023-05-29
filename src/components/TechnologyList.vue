<script>
import axios from 'axios';
export default {
    name: 'TechnologyList',
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            technologies: [],
            currentTechnology: '',
        }
    },
    methods: {
        getTechnologies() {
            axios.get(this.apiBaseUrl + "/technologies")
                .then((response) => {
                    this.technologies = response.data.results
                })
        },
        changePage(){
            this.$router.push({name: 'technology', params:{slug: this.currentTechnology}});
        }
    },
    created() {
        this.getTechnologies();
    }
}
</script>

<template>
    <section>
        <div class="container">
            <select class="form-select mt-3" v-if="technologies.length > 0" @change="changePage" v-model="currentTechnology">
                <option :value="item.slug" v-for="item in technologies">{{ item.name }}</option>
            </select>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>