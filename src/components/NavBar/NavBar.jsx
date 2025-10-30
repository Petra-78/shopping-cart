import { Link } from "react-router";
import CartIcon from "../cart-icon/CartIcon";

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
        <li>
          <CartIcon />
        </li>
      </ul>
    </div>
  );
}
