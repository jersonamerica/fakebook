export type Post = {
  _id?: string;
  title: string;
  creator: string;
  message: string;
  tags: Array<string>;
  selectedFile: string;
  createAt?: string;
  likeCount: number;
};

export interface AppState {
  posts: Array<Post>;
}
