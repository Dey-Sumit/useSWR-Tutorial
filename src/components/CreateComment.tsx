import axios from "axios";
import { useState } from "react";

const CreateComment = ({ postId }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000);
    await axios(`/posts/${postId}/comments`, {
      method: "POST",
      data: {
        id,
        content: `${comment} ${id}`,
      },
    });
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-50">
      <textarea
        cols={3}
        className="form-control"
        placeholder="Write your dream comment:)"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      ></textarea>
      <button className="btn btn-outline-warning" type="submit">
        Add comment
      </button>
    </form>
  );
};

export default CreateComment;
