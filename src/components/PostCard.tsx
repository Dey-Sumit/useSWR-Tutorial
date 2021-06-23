import { useRouter } from "next/router";

const PostCard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/posts/${1}`);
  };

  return (
    <div className="card w-50 bg-dark" onClick={handleClick}>
      <p className="card-header">Post Id : 123</p>
      <p className="card-body">This is a Post</p>
    </div>
  );
};

export default PostCard;
