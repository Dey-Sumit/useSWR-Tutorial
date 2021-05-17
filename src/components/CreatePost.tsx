const CreatePost = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mb-4 space-y-4 ">
      <textarea
        placeholder="Type the post..."
        rows={3}
        className="p-1 text-white bg-transparent border"
      />
      <button className="w-32 p-1 ml-auto text-sm bg-gray-800 rounded-lg shadow-lg">
        Add Post
      </button>
    </form>
  );
};

export default CreatePost;
