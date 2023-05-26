<script>
export default {
    name:'AppHeader'
}
</script>

<template>
    <header>
        <div class="container">
            <div class="row">
                <nav>
                    <ul class="list-unstyled">
                        <li>
                            <RouterLink :to="{ name: 'home' }" class="nav-link">
                                home
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{ name: 'projects' }" class="nav-link">
                                projects
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<style>

</style>