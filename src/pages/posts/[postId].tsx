import CreateComment from "@components/CreateComment";
import CommentCard from "@components/CommentCard";
import PostCard from "@components/PostCard";

const index = () => {
  const getPost = () => {};

  const getComments = () => {};

  return (
    <div>
      <PostCard />
      <CreateComment />

      <h4>Comments</h4>
      {[...new Array(5)].map((_, i) => (
        <CommentCard key={i} />
      ))}
    </div>
  );
};

export default index;
