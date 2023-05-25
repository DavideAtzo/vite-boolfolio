<script>
export default {
    name: 'AppMain',
    props: {
        data: Object
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row my-4 gy-4">
                <div class="col col-md-3" v-for="project in data">
                    <div class="card">
                        <h5 class="px-2"><span>Title: </span>{{ project.project_title }}</h5>
                        <div class="card-body">
                            <p><span>Date: </span>{{ project.creation_date }}</p>
                            <p><span>Description: </span>{{ project.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style></style>