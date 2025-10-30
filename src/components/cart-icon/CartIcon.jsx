import { useContext } from "react";
import { Link } from "react-router";
import CartContext from "../../context/CartContext";

export default function CartIcon() {
  const [cart] = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart" className="relative inline-flex items-center">
      🛒
      {totalItems > 0 && <span>{totalItems}</span>}
    </Link>
  );
}
