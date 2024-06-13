<template>
    <header class="py-3">
        <div class="container">
            <nav>
                <ul class="d-flex gap-3 list-unstyled">
                    <li>
                        <RouterLink :class="$route.fullPath === '/' ? 'text-danger' : ''" to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink :class="$route.fullPath === '/portfolio' ? 'text-danger' : ''" to="/portfolio">Portfolio</RouterLink>
                    </li>
                    <li>
                        <RouterLink :class="$route.fullPath === '/contact' ? 'text-danger' : ''" to="/contact">Contact</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>