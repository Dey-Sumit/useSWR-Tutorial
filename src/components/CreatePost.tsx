import { IPost } from "@libs/types";
import { usePagination } from "@libs/usePagination";
import axios from "axios";
import { useState } from "react";

const CreatePost = () => {
  const [content, setContent] = useState("");
  const { mutate: paginatedPostsMutate } = usePagination<IPost>(
    "/posts?_sort=createdAt&_order=desc"
  );
  const handleSubmit = async (e) => {
    e.preventDefault();

    // mutate(previousData=>)

    const id = Math.floor(Math.random() * 10000);
    const new_content = `${content} with ${id}`;
    //! 9 👇
    const FAKE_POST = {
      id,
      content: new_content,
      createdAt: Date.now(),
      clientOnly: true,
    };

    paginatedPostsMutate((data) => {
      return [[FAKE_POST], ...data];
    }, false);

    setContent("");

    await axios("/posts", {
      method: "POST",
      data: {
        id,
        content: new_content,
        createdAt: Date.now(),
      },
    });
    paginatedPostsMutate();
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-50 ">
      <textarea
        cols={3}
        className="form-control"
        placeholder="Write your dream post:)"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      ></textarea>
      <button className="btn btn-outline-warning" type="submit">
        Add Post
      </button>
    </form>
  );
};

export default CreatePost;
