import { useRouter } from "next/router";

const PostCard = () => {
  const router = useRouter();
  const handleClick = (e) => {
    router.push(`/posts/${1}`);
  };

  return (
    <div
      className="p-2 mb-2 bg-gray-800 rounded-lg shadow-xl cursor-pointer hover:bg-gray-700"
      onClick={handleClick}
    >
      I am a post
    </div>
  );
};

export default PostCard;
