import { Link } from "react-router";
import CartIcon from "../cart-icon/CartIcon";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        BookHaven
      </Link>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className={styles.navLink}>
            Shop
          </Link>
        </li>
        <li className={styles.cartWrapper}>
          <CartIcon />
        </li>
      </ul>
    </nav>
  );
}
