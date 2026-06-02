<template>
  <div class="post-detail">
    <div to="/blog" class="post-detail__back"> ← Вернуться к блогу </div>

    <div v-if="loading" class="post-detail__loading">Загрузка...</div>

    <template v-else-if="post">
      <article class="post-detail__article">
        <header class="post-detail__header">
          <img
            v-if="post.avatar"
            :src="post.avatar"
            :alt="post.title"
            class="post-detail__avatar"
          />
          <div>
            <h1 class="post-detail__title">{{ post.title }}</h1>
            <p class="post-detail__date">{{ formatDate(post.createdAt) }}</p>
          </div>
        </header>

        <div class="post-detail__content">
          {{ post.content }}
        </div>
      </article>
    </template>

    <div v-else class="post-detail__error">Статья не найдена</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePosts } from '@shared/composables/usePosts';
import type { Post } from '@shared/types/post';

const route = useRoute();``
const { fetchPostById } = usePosts();

const post = ref<Post | null>(null);
const loading = ref(true);

const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

onMounted(async () => {
  try {
    const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
    post.value = await fetchPostById(id);
  } finally {
    loading.value = false;
  }
});

definePageMeta({
  layout: 'default',
});
</script>

<style scoped>
.post-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.post-detail__back {
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 24px;
  transition: color 0.2s;
}

.post-detail__back:hover {
  color: #0056b3;
}

.post-detail__loading,
.post-detail__error {
  text-align: center;
  padding: 40px 20px;
  font-size: 16px;
  color: #999;
}

.post-detail__article {
  background: white;
}

.post-detail__header {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e0e0e0;
}

.post-detail__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.post-detail__title {
  margin: 0 0 8px 0;
  font-size: 28px;
  font-weight: 700;
  color: #333;
}

.post-detail__date {
  margin: 0;
  font-size: 14px;
  color: #999;
}

.post-detail__content {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
