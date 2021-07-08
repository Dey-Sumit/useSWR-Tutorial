import CreatePost from "@components/CreatePost";
import PostCard from "@components/PostCard";
import Loader from "@components/Loader";
import { IPost } from "@libs/types";

import { useSWRInfinite } from "swr";
import { usePagination } from "@libs/usePagination";

export default function Home() {
  //! 4 👇
  // const { data: posts, error } = useSWR<IPost[]>(`/posts`);
  const {
    paginatedData: paginatedPosts,
    page,
    setPage,
    isLoadingMore,
    isReachedEnd,
  } = usePagination("/posts");

  // //! 1 👇
  // const [posts, setPosts] = useState<IPost[]>();
  // const getPosts = async () => {
  //   const { data } = await axios("/posts");
  //   setPosts(data);
  // };

  // useEffect(() => {
  //   getPosts();
  // }, []);

  return (
    <div>
      <h4>useSWR Hook ⛳</h4>

      {/* //8 👇 */}
      <CreatePost />

      <h4>Posts</h4>

      {/* {error && <h4>something went wrong</h4>} */}
      {paginatedPosts?.map((post, i) => (
        <PostCard key={i} post={post} />
      ))}
      {/* {!posts && <Loader />} */}
      {!paginatedPosts.length && <Loader />}

      {isLoadingMore && <Loader />}
      {!!paginatedPosts.length && !isReachedEnd && (
        <button
          onClick={() => setPage(page + 1)}
          className=" btn btn-outline-warning d-block mx-auto"
        >
          Load More
        </button>
      )}
    </div>
  );
}
