<template>
  <div class="page-home">
    <BlogModule />
  </div>
</template>

<script setup lang="ts">
import { BlogModule } from '@features/blog-module';
</script>

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
