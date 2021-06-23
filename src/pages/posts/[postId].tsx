import { useRouter } from "next/router";

import CommentsList from "@components/CommentsList";
import CreateComment from "@components/CreateComment";
import PostCard from "@components/PostCard";
import Loader from "@components/Loader";
import axios from "axios";
import { useEffect, useState } from "react";
import { IPost } from "@libs/types";

const index = () => {
  const router = useRouter();
  const postId = parseInt(router.query.postId as string);

  const [post, setPost] = useState<IPost>(null);
  const getPost = async () => {
    const { data } = await axios(`/posts/${postId}`);
    setPost(data);
  };
  useEffect(() => {
    postId && getPost();
  }, [postId]);

  return (
    <div className="w-1/2 p-4 mx-auto">
      {!post ? <Loader /> : <PostCard post={post} />}
      <CreateComment postId={postId} />
      <CommentsList postId={postId} />
    </div>
  );
};

export default index;
