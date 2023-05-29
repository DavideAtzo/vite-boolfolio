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
            types: []
        }
    },
    methods: {
        getTypes() {
            axios.get(this.apiBaseUrl + "/types")
                .then((response) => {
                    this.types = response.data.results
                })
        }
    },
    created() {
        this.getTypes();
    }
}
</script>
<template>
    <select class="form-select mt-3" v-if="types.length > 0">
        <option :value="types.slug" v-for="item in types">{{ item.name }}</option>
    </select>

</template>