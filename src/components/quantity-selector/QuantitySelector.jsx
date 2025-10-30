export default function QuantitySelector({ quantity, setQuantity }) {
  const handleDecrease = () => setQuantity(Math.max(1, quantity - 1));
  const handleIncrease = () => setQuantity(Math.min(100, quantity + 1));

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (isNaN(value)) return;
    setQuantity(Math.min(Math.max(value, 1), 100));
  };

  return (
    <div className="quantity-selector">
      <button type="button" onClick={handleDecrease}>
        -
      </button>
      <input
        type="number"
        value={quantity}
        min="1"
        max="100"
        onChange={handleChange}
      />
      <button type="button" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}
