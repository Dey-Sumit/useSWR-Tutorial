import axios from "axios";
import { useState } from "react";
import useSWR, { mutate } from "swr";

const CreatePost = () => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    try {
      //! do some wired stuff
    } catch (error) {
      console.log(error.data.response);
    }
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
