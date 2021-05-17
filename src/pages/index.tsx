import CreatePost from "../components/CreatePost";
import PostsList from "../components/PostsList";

export default function Home() {
  return (
    <div className="w-1/2 p-4 mx-auto text-center">
      <h1 className="mb-2 text-2xl border border-dashed">useSWR Tutorial</h1>
      <CreatePost />
      <PostsList />
    </div>
  );
}
