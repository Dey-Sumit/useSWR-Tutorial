import CreatePost from "@components/CreatePost";
import PostCard from "@components/PostCard";

export default function Home() {
  const getPosts = () => {
    
  };

  return (
    <div>
      <h4>useSWR Hook ⛳</h4>
      <CreatePost />

      <h4>Posts</h4>
      {[...new Array(10)].map((_, i) => (
        <PostCard key={i} />
      ))}
    </div>
  );
}
