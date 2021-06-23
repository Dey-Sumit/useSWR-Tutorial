export interface IPost {
  content: string;
  id: number;
}
export interface IComment {
  content: string;
  id: number;
  postId: number;
}
