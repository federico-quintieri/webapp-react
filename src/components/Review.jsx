export function Review({ author, rating, content }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="font-bold text-lg">{author}</h3>
      <p className="text-orange-400">Rating: {rating}/5</p>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
