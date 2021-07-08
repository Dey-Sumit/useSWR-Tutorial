import { IPost } from "@libs/types";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

const PostCard: FunctionComponent<{ post: IPost }> = ({ post: { content, id } }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/posts/${id}`);
  };

  return (
    <div className="card w-50 bg-dark" onClick={handleClick}>
      <p className="card-header">Post Id : {id}</p>
      <p className="card-body">{content}</p>
    </div>
  );
};

export default PostCard;
