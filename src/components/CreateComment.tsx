import { IComment } from "@libs/types";
import axios from "axios";
import { useState } from "react";
import { mutate } from "swr";

const CreateComment = ({ postId }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // mutate(previousData=>)

    const id = Math.floor(Math.random() * 10000);
    const new_comment = `${comment} with comment ID : ${id}`;
    //! 9 👇
    const FAKE_COMMENT = {
      id,
      content: new_comment,
      clientOnly: true,
    };

    mutate(
      `/posts/${postId}/comments`,
      (existingComments: IComment[]) => [...existingComments, FAKE_COMMENT],
      false
    );
    setComment("");

    await axios(`/posts/${postId}/comments`, {
      method: "POST",
      data: {
        id,
        content: new_comment,
      },
    });
    mutate(`/posts/${postId}/comments`);
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
