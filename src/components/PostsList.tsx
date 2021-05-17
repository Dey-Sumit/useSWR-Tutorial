import PostCard from "../components/PostCard";
const PostsList = () => {
  return (
    <div>
      <h1 className="mb-4 text-3xl">Posts</h1>
      {[...Array(10)].map((_, i) => (
        <PostCard />
      ))}
    </div>
  );
};

export default PostsList;
