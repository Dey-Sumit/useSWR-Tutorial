import axios from "axios";
import { useEffect, useState } from "react";
import CreatePost from "@components/CreatePost";
import { IPost } from "@libs/types";
import PostCard from "@components/PostCard";
import Loader from "@components/Loader";

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>(null);
  const getPosts = async () => {
    const { data } = await axios("/posts");
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);
  const updatePosts = (newPost) => setPosts([newPost, ...posts]);

  return (
    <>
      <h4>useSWR Hook Tutorial</h4>
      <CreatePost updatePosts={updatePosts} />

      <h4>Posts</h4>
      {!posts ? <Loader /> : posts?.map((post, i) => <PostCard key={i} post={post} />)}
    </>
  );
}
