export interface Post {
  createdAt: Date | string;
  description: string;
  id: string;
  image: string;
  preview: string;
  title: string;
}

export interface PostsResponse {
  data: Post[];
}
