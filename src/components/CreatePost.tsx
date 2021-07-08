import { IPost } from "@libs/types";
import axios from "axios";
import { useState } from "react";
import { mutate } from "swr";

const CreatePost = () => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // mutate(previousData=>)

    const id = Math.floor(Math.random() * 10000);
    const new_content = `${content} with ${id}`;
    //! 9 👇
    const FAKE_POST = {
      id,
      content: new_content,
      clientOnly: true,
    };

    mutate("/posts", (existingPosts: IPost[]) => [...existingPosts, FAKE_POST], false);
    setContent("");

    await axios("/posts", {
      method: "POST",
      data: {
        id,
        content: new_content,
      },
    });
    mutate("/posts");
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
