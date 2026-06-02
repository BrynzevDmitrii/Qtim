<script setup lang="ts">
import BlogModule from '@widgets/blog-module/BlogModule.vue';

</script>

<template>
    <div class="page-home">
        <h1 class="page-home__title">Arcticule</h1>
        <BlogModule />
    </div>
</template>

<style scoped>
.page-home {
    max-width: 1217px;
    margin: 0 auto;
}

.page-home__title {
    margin-top: 120px;
    font-size: 84px;
    font-weight: 400;
}
</style>