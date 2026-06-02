<template>
  <div class="post-card" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <NuxtLink :to="`/post/${post.id}`" class="post-card__link">
      <div class="post-card__image-wrap">
        <NuxtImg
          src="./images/office.png"
          :alt="post.title"
          class="post-card__image"
          width="280"
          height="280"
        />
      </div>

      <div class="post-card__body">
        <p class="post-card__content">{{ post.preview }}</p>
        <div class="post-card__read-more" :class="{ 'post-card__read-more--visible': isHovered }">
          Read more
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Post } from '@shared/types';

interface Props {
  post: Post;
}

defineProps<Props>();

const isHovered = ref(false);
</script>

<style scoped>
.post-card {
  display: flex;
  max-width: 280px;
  flex-direction: column;
  background: #fff;
  margin-top: 8px;
  overflow: hidden;
  min-height: 420px;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.post-card:hover {
  transform: translateY(-14px);
}

.post-card__image-wrap {
  width: 100%;
  min-height: 200px;
  overflow: hidden;
  position: relative;
}

.post-card__body {
  display: flex;
  flex-direction: column;
  padding: 24px 16px 36px 0;
  position: relative;
}

.post-card__content {
  max-width: 100%;
  font-size: 20px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.7;
  color: #545454;
}

.post-card__link {
  color: inherit;
  text-decoration: none;
}

.post-card__read-more {
  position: absolute;
  left: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
  color: rgba(226, 190, 255, 1);
  font-weight: 600;
  pointer-events: none;
}

.post-card__read-more--visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  pointer-events: auto;
}
</style>
