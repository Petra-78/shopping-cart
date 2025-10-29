import { useState } from "react";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = (e) => {
    e.preventDefault();
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = (e) => {
    e.preventDefault();
    setQuantity((prev) => Math.min(100, prev + 1));
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (isNaN(value)) return;
    const minMax = Math.min(Math.max(value, 1), 100);
    setQuantity(minMax);
  };

  return (
    <div className="quantity-selector">
      <button className="decrement" type="button" onClick={handleDecrease}>
        -
      </button>
      <input
        type="number"
        className="quantity-input"
        value={quantity}
        min="1"
        max="100"
        onChange={handleChange}
      />
      <button className="increment" type="button" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}
