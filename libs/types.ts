export interface IPost {
  content: string;
  id: number;
  createdAt:Date
}
export interface IComment {
  content: string;
  id: number;
  postId: number;
  createdAt:Date
}
