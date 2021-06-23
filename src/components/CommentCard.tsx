import { IComment } from "@libs/types";
import { FunctionComponent } from "react";

const CommentCard: FunctionComponent<{ data: IComment }> = ({ data: { content } }) => {
  return (
    <div className=" card w-50 bg-dark">
      <p className="card-body">{content} </p>
    </div>
  );
};

export default CommentCard;
