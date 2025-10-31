import styles from "./QuantitySelector.module.css";

export default function QuantitySelector({ quantity, setQuantity }) {
  const handleDecrease = () => setQuantity(Math.max(1, quantity - 1));
  const handleIncrease = () => setQuantity(Math.min(100, quantity + 1));

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (isNaN(value)) return;
    setQuantity(Math.min(Math.max(value, 1), 100));
  };

  return (
    <div className={styles.quantitySelector}>
      <button type="button" className={styles.button} onClick={handleDecrease}>
        -
      </button>
      <input
        className={styles.input}
        type="number"
        value={quantity}
        min="1"
        max="100"
        onChange={handleChange}
      />
      <button type="button" className={styles.button} onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}
