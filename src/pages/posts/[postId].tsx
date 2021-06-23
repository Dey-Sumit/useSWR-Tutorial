import { useRouter } from "next/router";

import CreateComment from "@components/CreateComment";
import CommentCard from "@components/CommentCard";
import PostCard from "@components/PostCard";
import Loader from "@components/Loader";
import axios from "axios";
import { useEffect, useState } from "react";
import { IComment, IPost } from "@libs/types";

const index = () => {
  const router = useRouter();
  const postId = parseInt(router.query.postId as string);

  const [post, setPost] = useState<IPost>(null);
  const [comments, setComments] = useState<IComment[]>(null);

  const getPost = async () => {
    const { data } = await axios(`/posts/${postId}`);
    setPost(data);
  };

  const getComments = async () => {
    const { data } = await axios(`/posts/${postId}/comments`);
    setComments(data);
  };

  useEffect(() => {
    postId && getComments();
  }, [postId]);

  useEffect(() => {
    postId && getPost();
  }, [postId]);

  return (
    <div className="w-1/2 p-4 mx-auto">
      {!post ? <Loader /> : <PostCard post={post} />}
      <CreateComment postId={postId} />

      <h4>Comments</h4>
      {!comments ? (
        <Loader />
      ) : (
        comments?.map((comment, i) => <CommentCard key={i} comment={comment} />)
      )}
    </div>
  );
};

export default index;
