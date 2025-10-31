import { NavLink } from "react-router";
import CartIcon from "../cart-icon/CartIcon";
import styles from "./NavBar.module.css";
import logo from "../../../public/favicon.png";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        <img src={logo} alt="book logo" />
        BookHaven
      </NavLink>
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLinks : styles.navLinks
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? styles.activeLinks : styles.navLinks
            }
          >
            Shop
          </NavLink>
        </li>

        <li className={styles.cartWrapper}>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? styles.activeLinks : styles.navLinks
            }
          >
            <CartIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
