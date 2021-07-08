import CreatePost from "@components/CreatePost";
import PostCard from "@components/PostCard";
import Loader from "@components/Loader";
import { IPost } from "@libs/types";
import { usePagination } from "@libs/usePagination";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  //! 4 👇
  // const { data: posts, error } = useSWR<IPost[]>(`/posts`);
  const {
    paginatedData: paginatedPosts,
    page,
    setPage,
    isLoadingMore,
    isReachedEnd,
  } = usePagination<IPost>("/posts");

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
      <InfiniteScroll
        dataLength={paginatedPosts.length}
        next={() => setPage(page + 1)}
        hasMore={!isReachedEnd}
        loader={<Loader />}
        endMessage={<p className="text-center">No more posts</p>}
      >
        {paginatedPosts?.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </InfiniteScroll>

      {/* {!posts && <Loader />} */}
      {/* {!paginatedPosts.length && <Loader />} */}
    </div>
  );
}
