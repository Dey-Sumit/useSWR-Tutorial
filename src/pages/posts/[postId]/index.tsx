import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { IComment, IPost } from "../../../../libs/types";
import CommentCard from "../../../components/CommentCard";
import CreateComment from "../../../components/CreateComment";
import Loader from "../../../components/Loader";
import PostCard from "../../../components/PostCard";
const index = () => {
  const router = useRouter();
  const postId = parseInt(router.query.postId as string);
  const { data: comments, error } = useSWR<IComment[]>(
    postId && `/posts/${postId}/comments`
  );
  const { data: posts, error: postsError } = useSWR<IPost[]>(
    postId && `/posts`
  );
  // console.log({ , error });
  // const [comments, setComments] = useState<IComment[]>(null);
  // const getComments = async () => {
  //   const { data } = await axios(
  //     `http://localhost:3001/posts/${postId}/comments`
  //   );
  //   console.log({ data });
  //   setComments(data);
  // };

  // useEffect(() => {
  //   postId && getComments();
  // }, [postId]);

  return (
    <div className="w-1/2 p-4 mx-auto text-center">
      {/* <h1>Post {postId }</h1> */}
      {posts && <PostCard post={posts[postId - 1]} />}
      <CreateComment />
      <h2 className="mb-4">Comments</h2>
      {!comments && <Loader />}
      {comments?.map((comment, i) => (
        <CommentCard key={i} data={comment} />
      ))}
    </div>
  );
};

export default index;
