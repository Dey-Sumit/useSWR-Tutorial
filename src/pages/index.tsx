import CreatePost from "@components/CreatePost";
import PostsList from "@components/PostsList";

export default function Home() {
  return (
    <>
      <h4>useSWR Hook Tutorial</h4>
      <CreatePost />
      <PostsList />
      
    </>
  );
}
