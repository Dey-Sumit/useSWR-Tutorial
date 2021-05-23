const CommentCard = ({ data }) => {
  return (
    <div className="p-2 mb-2 bg-gray-800 rounded-lg shadow-xl cursor-pointer hover:bg-gray-700">
      {data.content}
    </div>
  );
};

export default CommentCard;
