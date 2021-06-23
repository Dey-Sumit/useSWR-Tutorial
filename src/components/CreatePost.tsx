import axios from "axios";
import { useState } from "react";
import useSWR, { mutate } from "swr";

const CreatePost = () => {
  // const { data: posts, error, mutate } = useSWR<IPost[]>("/posts");
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000);
    await axios("/posts", {
      method: "POST",
      data: {
        id,
        content: `${content} ${id}`,
      },
    });
    setContent("");
    // mutate();
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
