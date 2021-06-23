import { useRouter } from "next/router";

import CreateComment from "@components/CreateComment";
import CommentCard from "@components/CommentCard";
import PostCard from "@components/PostCard";
import Loader from "@components/Loader";
import axios from "axios";
import { useEffect, useState } from "react";
import { IComment, IPost } from "@libs/types";

const index = () => {
  const getPost = () => {};

  const getComments = () => {};

  return (
    <div>
      <PostCard />
      <CreateComment />

      <h4>Comments</h4>
      {[...new Array(5)].map((_, i) => (
        <CommentCard key={i} />
      ))}
    </div>
  );
};

export default index;
