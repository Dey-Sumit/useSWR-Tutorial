import { useRouter } from "next/router";
import useSWR from "swr";
import { IPost } from "../../../libs/types";
import CommentsList from "../../components/CommentsList";
import CreateComment from "../../components/CreateComment";
import PostCard from "../../components/PostCard";

const index = () => {
  const router = useRouter();
  const postId = parseInt(router.query.postId as string);
  const { data: posts, error: postsError } = useSWR<IPost[]>(postId && `/posts`);
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
  const postIndex = posts.findIndex((post) => post.id === postId);

  return (
    <div className="w-1/2 p-4 mx-auto text-center">
      {/* <h1>Post {postId }</h1> */}
      {posts && <PostCard post={posts[postIndex]} />}
      <CreateComment />
      <CommentsList postId={postId} />
    </div>
  );
};

export default index;
