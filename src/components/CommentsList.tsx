import { useRouter } from "next/router";
import useSWR from "swr";
import { IComment } from "../../libs/types";
import Loader from "../components/Loader";
import CommentCard from "../components/CommentCard";

const CommentsList = ({postId}) => {

  const { data: comments, error } = useSWR<IComment[]>(postId && `/posts/${postId}/comments`);
  return (
    <div>
      <h2 className="mb-4">Comments</h2>
      {!comments && <Loader />}
      {comments?.map((comment, i) => (
        <CommentCard key={i} data={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
