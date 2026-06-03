<template>
  <div class="page-skeleton">
    <div class="page-skeleton__title">
      <SkeletonRectangle :height="'126px'" :width="'300px'" />
    </div>
    <div class="page-skeleton__img">
      <SkeletonRectangle :height="'700px'" :width="'1216px'" />
    </div>

    <div class="page-skeleton__description">
      <SkeletonRectangle :height="'695px'" :width="'540px'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SkeletonRectangle from '@shared/ui/SkeletonRectangle.vue';
</script>

<style scoped>
.page-skeleton {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  width: 1220px;
}

.page-skeleton__title {
  width: 300px;
  height: 126px;
}

.page-skeleton__img {
  width: 1216px;
  height: 700px;
}

.page-skeleton__description {
  width: 540px;
  height: 695px;
  margin-bottom: 80px;
}
</style>
