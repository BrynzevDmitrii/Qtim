<template>
  <div class="blog-module">

    <div v-if="loading" class="blog-module__loading">Загрузка...</div>

    <template v-else>
      <div class="blog-module__posts">
        <PostCard v-for="post in paginatedPosts" :key="post.id" :post="post" />
      </div>

      <Pagination :current-page="currentPage" :total-pages="totalPages" @update:page="currentPage = $event" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import PostCard from '@shared/ui/PostCard.vue';
import Pagination from '@shared/ui/Pagination.vue';
import { usePosts } from '@shared/composables/usePosts';
import type { PostsResponse } from '@shared/types/post';

const POSTS_PER_PAGE = 8;

const { fetchPosts } = usePosts();
const posts = ref<PostsResponse>({ data: [] });
const loading = ref(true);
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(posts.value.data.length / POSTS_PER_PAGE));

const paginatedPosts = computed(() => {
  const start = currentPage.value - 1;
  const end = start + POSTS_PER_PAGE;
  if (end > posts.value.data.length) return posts.value.data.slice(start);
  return posts.value.data.slice(start, end);
});

onMounted(async () => {
  try {
    posts.value = await fetchPosts();
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.blog-module {
  max-width: 1220px;
  margin: 0 auto;
}

.blog-module__title {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 24px 0;
  color: #333;
}

.blog-module__loading {
  text-align: center;
  padding: 40px 20px;
  font-size: 16px;
  color: #999;
}

.blog-module__posts {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 40px;
}

@media (max-width: 768px) {
  .blog-module__posts {
    gap: 24px;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
