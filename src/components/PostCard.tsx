import { IPost } from "@libs/types";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

const PostCard: FunctionComponent<{ post: IPost }> = ({ post: { content, id, clientOnly } }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/posts/${id}`);
  };

  const classNames = clientOnly ? "card w-50 bg-dark border" : "card w-50 bg-dark";
  return (
    <div className={classNames} onClick={handleClick}>
      <p className="card-header">Post Id : {id}</p>
      <p className="card-body">{content}</p>
    </div>
  );
};

export default PostCard;
