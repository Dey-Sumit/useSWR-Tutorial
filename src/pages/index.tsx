import CreatePost from "@components/CreatePost";
import PostCard from "@components/PostCard";
import Loader from "@components/Loader";
import { IPost } from "@libs/types";

import useSWR from "swr";

export default function Home() {
  //! 4 👇
  const { data: posts, error } = useSWR<IPost[]>(`/posts`);

  // //! 1 👇
  // const [posts, setPosts] = useState<IPost[]>();
  // const getPosts = async () => {
  //   const { data } = await axios("/posts");
  //   setPosts(data);
  // };

  // useEffect(() => {
  //   getPosts();
  // }, []);

  return (
    <div>
      <h4>useSWR Hook ⛳</h4>

      {/* //8 👇 */}
      <CreatePost />

      <h4>Posts</h4>

      {!posts && <Loader />}
      {error && <h4>something went wrong</h4>}
      {posts?.map((post, i) => (
        <PostCard key={i} post={post} />
      ))}
    </div>
  );
}
