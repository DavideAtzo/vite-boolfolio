<script>
import TypeList from './TypeList.vue';
export default {
    name: 'AppHeader',
    components: {TypeList}
}
</script>

<template>
    <header>
        <div class="container">
            <div class="row">
                <nav>
                    <ul class="list-unstyled d-flex gap-4">
                        <li class="p-3">
                            <RouterLink :to="{ name: 'home' }" class="nav-link">
                                home
                            </RouterLink>
                        </li>
                        <li class="p-3">
                            <RouterLink :to="{ name: 'projects' }" class="nav-link">
                                projects
                            </RouterLink>
                        </li>
                        <li>
                           <TypeList />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: aquamarine;

    li {
        font-size: 22px;
        text-transform: uppercase;
        font-weight: 600;
    }
}
</style>