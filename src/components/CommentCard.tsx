import { IComment } from "@libs/types";
import { FunctionComponent } from "react";

const CommentCard: FunctionComponent<{ comment: IComment }> = ({
  comment: { content, clientOnly },
}) => {
  const classNames = clientOnly ? "card w-50 bg-dark border" : "card w-50 bg-dark";

  return (
    <div className={classNames}>
      <p className="card-body">{content} </p>
    </div>
  );
};

export default CommentCard;
