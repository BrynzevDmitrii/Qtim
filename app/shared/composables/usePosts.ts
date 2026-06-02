import type { Post, PostsResponse } from '@shared/types/post';

const API_BASE = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/';

export const usePosts = () => {
  const fetchPosts = async (): Promise<PostsResponse> => {
    try {
      const data = await $fetch<Post[]>(`${API_BASE}`);
      return { data };
    } catch (error) {
      console.error('Error fetching posts:', error);
      return { data: [] };
    }
  };

  const fetchPostById = async (id: string): Promise<Post | null> => {
    try {
      const data = await $fetch<Post>(`${API_BASE}/posts/${id}`);
      console.log(`Fetched post ${id}:`, data);
      return data;
    } catch (error) {
      console.error(`Error fetching post ${id}:`, error);
      return null;
    }
  };

  return {
    fetchPosts,
    fetchPostById,
  };
};
