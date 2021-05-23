import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { IPost } from "../../libs/types";

const PostCard: FunctionComponent<{ post: IPost }> = ({ post }) => {
  const router = useRouter();
  const handleClick = (e) => {
    router.push(`/posts/${post.id}`);
  };

  return (
    <div
      className="p-2 mb-2 bg-gray-800 rounded-lg shadow-xl cursor-pointer hover:bg-gray-700"
      onClick={handleClick}
    >
      {post.content}
    </div>
  );
};

export default PostCard;
