export interface IPost {
  content: string;
  id: number;
  clientOnly: boolean;
}
export interface IComment {
  content: string;
  id: number;
  postId: number;
  clientOnly: boolean;
}
