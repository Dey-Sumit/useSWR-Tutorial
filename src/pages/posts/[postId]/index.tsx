import { useRouter } from "next/router";
import CommentCard from "../../../components/CommentCard";
import CreateComment from "../../../components/CreateComment";
import PostCard from "../../../components/PostCard";
const index = () => {
  const {
    query: { postId },
  } = useRouter();
  return (
    <div className="w-1/2 p-4 mx-auto text-center">
      {/* <h1>Post {postId }</h1> */}
      <PostCard />
      <CreateComment />
      <h2 className="mb-4">Comments</h2>
      {[...Array(10)].map((_, i) => (
        <CommentCard />
      ))}
    </div>
  );
};

export default index;
