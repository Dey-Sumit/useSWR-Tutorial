import CreateComment from "@components/CreateComment";
import CommentCard from "@components/CommentCard";
import PostCard from "@components/PostCard";
import Loader from "@components/Loader";
import { useEffect, useState } from "react";
import { IComment, IPost } from "@libs/types";
import axios from "axios";
import { useRouter } from "next/router";

const index = () => {
  const {
    query: { postId },
  } = useRouter();
  const [comments, setComments] = useState<IComment[]>();
  const [post, setPost] = useState<IPost>();

  //! 3 👇
  const getPost = async () => {
    const { data } = await axios(`/posts/${postId}`);
    setPost(data);
  };

  //! 2 👇

  const getComments = async () => {
    const { data } = await axios(`/posts/${postId}/comments`);
    setComments(data);
  };

  useEffect(() => {
    if (postId) {
      getComments();
      getPost();
    }
  }, [postId]);

  return (
    <div>
      {post ? <PostCard post={post} /> : <Loader />}
      
      <CreateComment />

      <h4>Comments</h4>

      {!comments && <Loader />}

      {comments?.map((comment, i) => (
        <CommentCard key={i} comment={comment} />
      ))}
    </div>
  );
};

export default index;
