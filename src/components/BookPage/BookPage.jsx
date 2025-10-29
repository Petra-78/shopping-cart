import { useParams } from "react-router";
import { useFetchBooks } from "../../hooks/useFetchBooks";

export default function BookPage() {
  const { bookId } = useParams();
  const { book, loading, error } = useFetchBooks({ bookId });

  if (loading) return <p>Loading book details...</p>;
  if (error) return <p>Failed to load book 😢</p>;
  if (!book) return <p>Book not found.</p>;

  return (
    <div>
      <img
        src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
        alt={book.title}
      />
      <h1>{book.title}</h1>
      <h2>Describtion</h2>
      <p>{book.description}</p>
    </div>
  );
}
