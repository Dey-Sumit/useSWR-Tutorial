import CreateComment from "@components/CreateComment";
import CommentCard from "@components/CommentCard";
import PostCard from "@components/PostCard";
import Loader from "@components/Loader";
import { IComment, IPost } from "@libs/types";
import { useRouter } from "next/router";
import useSWR from "swr";
import { usePagination } from "@libs/usePagination";

const index = () => {
  const {
    query: { postId },
  } = useRouter();

  //! 5 👇
  // const { data: comments, error: commentsError } = useSWR<IComment[]>(
  //   postId && `/posts/${postId}/comments`
  // );

  //! 7 👇
  const { data: posts, error: postsError } = useSWR<IPost[]>(postId && `/posts`);

  const {
    paginatedData: paginatedComments,
    page,
    setPage,
    isLoadingMore,
    isReachedEnd,
  } = usePagination(`/posts/${postId}/comments`);

  // const [comments, setComments] = useState<IComment[]>();
  // const [post, setPost] = useState<IPost>();

  // //! 3 👇
  // const getPost = async () => {
  //   const { data } = await axios(`/posts/${postId}`);
  //   setPost(data);
  // };

  // //! 2 👇

  // const getComments = async () => {
  //   const { data } = await axios(`/posts/${postId}/comments`);
  //   setComments(data);
  // };

  // useEffect(() => {
  //   if (postId) {
  //     getComments();
  //     getPost();
  //   }
  // }, [postId]);

  //! 8 👇
  const postIndex = posts?.findIndex((post) => post.id === Number(postId));

  return (
    <div>
      {posts ? <PostCard post={posts[postIndex]} /> : <Loader />}

      <CreateComment postId={postId} />

      <h4>Comments</h4>

      {paginatedComments?.map((comment, i) => (
        <CommentCard key={i} comment={comment} />
      ))}
      {!paginatedComments.length && <Loader />}
      {isLoadingMore && <Loader />}
      {paginatedComments.length && !isReachedEnd && (
        <button
          onClick={() => setPage(page + 1)}
          className=" btn btn-outline-warning d-block mx-auto"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default index;
