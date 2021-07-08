import CreatePost from "@components/CreatePost";
import PostCard from "@components/PostCard";
import Loader from "@components/Loader";
import { IPost } from "@libs/types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  
  //! 1 👇
  const [posts, setPosts] = useState<IPost[]>();
  const getPosts = async () => {
    const { data } = await axios("/posts");
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h4>useSWR Hook ⛳</h4>
      <CreatePost setPosts={setPosts}/>

      <h4>Posts</h4>

      {!posts && <Loader />}

      {posts?.map((post, i) => (
        <PostCard key={i} post={post} />
      ))}
    </div>
  );
}
