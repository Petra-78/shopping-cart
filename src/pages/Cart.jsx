import { useContext } from "react";
import CartContext from "../context/CartContext";
import QuantitySelector from "../components/quantity-selector/QuantitySelector";

export default function Cart() {
  const [cart, setCart] = useContext(CartContext);

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  if (cart.length === 0) return <h2>Your cart is empty.</h2>;

  return (
    <>
      <h1>Your Cart</h1>
      <div>
        <h3>Item</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Total</h3>
      </div>

      {cart.map((item, index) => (
        <div key={item.book.key} className="cart-item">
          <img
            src={`https://covers.openlibrary.org/b/id/${item.book.cover_i}-M.jpg`}
            alt={item.book.title}
          />
          <h4>{item.book.title}</h4>
          <p>{item.book.author_name}</p>
          <p>${10.98}</p>
          <QuantitySelector
            quantity={item.quantity}
            setQuantity={(q) => updateQuantity(index, q)}
          />
          <p>${(10.98 * item.quantity).toFixed(2)}</p>
          <button onClick={() => removeFromCart(index)}>Delete</button>
        </div>
      ))}
      <div className="total">
        <h3>Order summary</h3>
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        <p>Your taxes and shipping costs will be calculated at checkout.</p>
        <button type="button">Checkout</button>
      </div>
    </>
  );
}
