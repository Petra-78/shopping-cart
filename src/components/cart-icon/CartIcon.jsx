import { useContext } from "react";
import { Link } from "react-router";
import CartContext from "../../context/CartContext";
import styles from "./CartIcon.module.css";

export default function CartIcon() {
  const [cart] = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart" className={styles.cartIcon}>
      🛒
      {totalItems >= 0 && (
        <span className={styles.cartCount}>{totalItems}</span>
      )}
    </Link>
  );
}
