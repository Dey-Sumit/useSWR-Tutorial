import useSWR from "swr";
import { IComment } from "libs/types";
import Loader from "@components/Loader";
import CommentCard from "@components/CommentCard";

const CommentsList = ({ postId }) => {
  const { data: comments, error } = useSWR<IComment[]>(postId && `/posts/${postId}/comments`);
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
