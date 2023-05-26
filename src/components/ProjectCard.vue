<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    }
}
</script>

<template>
    <h5 class="px-2"><span>Title: </span>{{ project.project_title }}</h5>
    <div class="card-body">
        <p><span class="">Date: </span>{{ project.creation_date }}</p>
        <p><span>Description: </span>{{ project.description }}</p>
    </div>
</template>

<style lang="scss" scoped>
span{
    text-transform: uppercase;
}
</style>