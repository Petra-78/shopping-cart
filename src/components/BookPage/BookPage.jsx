import { useParams } from "react-router";
import { useContext, useState, useEffect } from "react";
import BooksContext from "../../context/BooksContext";
import CartContext from "../../context/CartContext";
import QuantitySelector from "../quantity-selector/QuantitySelector";
import styles from "./BookPage.module.css";
import Loading from "../loading/Loading";

export default function BookPage() {
  const { bookId } = useParams();
  const { books, loading, error } = useContext(BooksContext);
  const [, setCart] = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const price = 10.98;

  const book = books.find((b) => b.key.split("/").pop() === bookId);

  useEffect(() => {
    if (!bookId) return;

    async function fetchDescription() {
      try {
        const res = await fetch(`https://openlibrary.org/works/${bookId}.json`);
        const data = await res.json();
        setDescription(
          data.description?.value ||
            data.description ||
            "No description available."
        );
      } catch (err) {
        console.error(err);
      }
    }

    fetchDescription();
  }, [bookId]);

  const handleAddToCart = () => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.book.key === book.key
      );

      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { book, quantity, price }];
      }
    });
  };

  if (loading) return <Loading />;
  if (error) return <p>Error loading book 😢</p>;
  if (!book) return <p>Book not found.</p>;

  return (
    <div className={styles.bookPage}>
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
        alt={book.title}
        className={styles.bookImage}
      />
      <div className={styles.details}>
        <h1>{book.title}</h1>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.actionRow}>
          <span className={styles.price}>${price}</span>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </div>
        <button className={styles.addToCart} onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
