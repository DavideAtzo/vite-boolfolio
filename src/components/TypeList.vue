<script>
import axios from 'axios';
export default {
    name: 'TypeList',
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            types: [],
            currentType: '',
        }
    },
    methods: {
        getTypes() {
            axios.get(this.apiBaseUrl + "/types")
                .then((response) => {
                    this.types = response.data.results
                })
        },
        changePage(){
            this.$router.push({name: 'type', params:{slug: this.currentType}});
        }
    },
    created() {
        this.getTypes();
    }
}
</script>
<template>
    <select class="form-select mt-3" v-if="types.length > 0" @change="changePage" v-model="currentType">
        <option :value="item.slug" v-for="item in types">{{ item.name }}</option>
    </select>

</template>