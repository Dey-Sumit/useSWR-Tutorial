import useSWR from "swr";
import { IComment, IPost } from "libs/types";
import Loader from "@components/Loader";
import CommentCard from "@components/CommentCard";
import { useEffect, useState } from "react";
import axios from "axios";

const CommentsList = ({ postId }) => {
  // const { data: comments, error } = useSWR<IComment[]>(postId && `/posts/${postId}/comments`);
  const [comments, setComments] = useState<IComment[]>(null);
  const getPosts = async () => {
    const { data } = await axios(`/posts/${postId}/comments`);
    setComments(data);
  };

  useEffect(() => {
    postId && getPosts();
  }, []);
  return (
    <>
      <h2 className="my-3 text-center">Comments</h2>
      {!comments && <Loader />}
      {comments?.map((comment, i) => (
        <CommentCard key={i} data={comment} />
      ))}
    </>
  );
};

export default CommentsList;
