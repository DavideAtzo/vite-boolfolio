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
            errorMessage: null,
            formData: {
                author: '',
                content: ''
            }
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
        },
        commentDate(comment_date) {
            const commentDate = new Date(comment_date);
            return commentDate.toLocaleString();
        },
        sendComment() {
            const data = {
                author: this.formData.author,
                content: this.formData.content,
                project_id: this.project.id
            };
            axios.post(this.apiBaseUrl + `/comments`, data)
                .then((response) => {
                    if(response.status === 201){ 
                        this.project.comments.push(response.data)
                    } 

                })
                .catch((error) => {
                    console.log(error)
                });
        },
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
                        <h3>Comments</h3>
                        <div v-for="comment in project.comments">
                            <h4>{{ comment.author }}</h4>
                            <p>{{ commentDate(comment.created_at) }}</p>
                            <p>{{ comment.content }}</p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <h3>New comment</h3>
                        <form @submit.prevent="sendComment">
                            <div class="mb-3">
                                <label for="author" class="form-label">Author</label>
                                <input type="text" class="form-control" id="author" v-model="formData.author">
                            </div>
                            <div class="mb-3">
                                <label for="content" class="form-label">Text</label>
                                <textarea class="form-control" id="content" rows="3" v-model="formData.content"></textarea>
                            </div>
                            <button class="btn btn-primary">Send comment</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>