<template>
  <div class="blog-skeleton">
    <div v-for="i in 8" :key="i" class="post-card-skeleton">
      <div class="post-card-skeleton__image">
        <SkeletonRectangle :height="'280px'" :width="'280px'" />
      </div>
      <div class="post-card-skeleton__body">
        <SkeletonRectangle :height="'160px'" :width="'280px'" />
        <SkeletonRectangle :height="'60px'" :width="'280px'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SkeletonRectangle from '@shared/ui/SkeletonRectangle.vue';
</script>

<style scoped>
.blog-skeleton {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 30px;
  width: 1220px;
}

.post-card-skeleton {
  max-width: 280px;
  display: flex;
  flex-direction: column;
}

.post-card-skeleton__image {
  width: 100%;
  height: 280px;
  background: #eee;
}

.post-card-skeleton__body {
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.post-card-skeleton__title {
  height: 40px;
  background: #eee;
  margin-bottom: 8px;
}

.post-card-skeleton__date {
  height: 20px;
  background: #eee;
}
</style>
