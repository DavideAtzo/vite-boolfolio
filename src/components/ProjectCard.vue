<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    }
}
</script>

<template>
    <h5 class="px-2"><span>Title: </span>{{ project.id }}</h5>
    <div class="card-body">
        sono card body
        <p><span>Date: </span>{{ project.creation_date }}</p>
        <p><span>Description: </span>{{ project.description }}</p>
    </div>
</template>

<style></style>