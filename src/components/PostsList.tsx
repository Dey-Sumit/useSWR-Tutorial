import useSWR from "swr";
import PostCard from "@components/PostCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { IPost } from "@libs/types";
import Loader from "@components/Loader";

const PostsList = () => {
  const { data: posts, error } = useSWR<IPost[]>("/posts");

  //const [posts, setPosts] = useState<IPost[]>(null);
  // const getPosts = async () => {
  //   const { data } = await axios("http://localhost:3001/posts");
  //   console.log({ data });
  //   setPosts(data);
  // };

  // useEffect(() => {
  //   getPosts();
  // }, [getPosts]);

  return (
    <div>
      <h4>Posts</h4>
      {!posts && <Loader />}
      {posts?.map((post, i) => (
        <PostCard key={i} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
