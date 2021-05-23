import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { IComment } from "../../../../libs/types";
import CommentCard from "../../../components/CommentCard";
import CreateComment from "../../../components/CreateComment";
import Loader from "../../../components/Loader";
import PostCard from "../../../components/PostCard";
const index = () => {
  const {
    query: { postId },
  } = useRouter();
  // const { data, error } = useSWR("http://localhost:3001/posts", (url: string) =>
  //   axios(url).then((r) => r.data)
  // );
  // console.log({ data, error });
  const [comments, setComments] = useState<IComment[]>(null);
  const getComments = async () => {
    const { data } = await axios(
      `http://localhost:3001/posts/${postId}/comments`
    );
    console.log({ data });
    setComments(data);
  };

  useEffect(() => {
    getComments();
  }, [getComments]);

  return (
    <div className="w-1/2 p-4 mx-auto text-center">
      {/* <h1>Post {postId }</h1> */}
      {/* <PostCard /> */}
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
