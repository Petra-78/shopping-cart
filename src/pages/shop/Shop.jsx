import Books from "../../components/Books/Books";
import styles from "./Shop.module.css";

export default function Shop() {
  return (
    <>
      <h1 className={styles.title}>Shop from our best collection</h1>
      <Books />
    </>
  );
}
