<template>
  <div class="post-detail">
    <div v-if="loading" class="post-detail__loading">Loading...</div>
    <template v-else>
      <div class="post-detail__article">
        <div class="post-detail__title">{{ post?.title }}</div>
        <NuxtImg
          src="./images/bike.png"
          alt="Arcticule-image"
          class="post-detail__image"
          width="1216"
          height="700"
        />
        <div class="post-detail__description">
          <p class="post-detail__about">About</p>
          <p class="post-detail__content">{{ post?.description }}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePosts } from '@shared/lib/composables/usePosts';
import type { Post } from '@shared/types';

const route = useRoute();

const { fetchPostById } = usePosts();

const post = ref<Post | null>(null);
const loading = ref(true);

onMounted(async () => {
  try {
    const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
    post.value = await fetchPostById(id as string);
  } finally {
    loading.value = false;
  }
});

definePageMeta({
  layout: 'default',
});
</script>

<style scoped>
@import "@/styles/colors.scss";
.post-detail {
  max-width: 1220px;
  margin: 0 auto;
}

.post-detail__article {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 80px;
}

.post-detail__title {
  margin-bottom: 73px;
  font-size: 84px;
  font-weight: 400;
  color: var(--color-black);
  width: 100%;
}

.post-detail__image {
  margin-bottom: 80px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-detail__description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
}

.post-detail__about {
  font-size: 16px;
  font-weight: 400;
  color: var(--color-black);
}

.post-detail__content {
  max-width: 695px;
  font-size: 36px;
  font-weight: 400;
  color: var(--color-black);
  line-height: 150%;
}

@media (max-width: 768px) {
  .post-detail {
    padding: 24px;
  }

  .post-detail__article {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .post-detail__title {
    font-size: 48px;
  }

  .post-detail__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .post-detail__description {
    gap: 24px;
  }

  .post-detail__about {
    font-size: 12px;
  }

  .post-detail__content {
    font-size: 24px;
  }
}
</style>
