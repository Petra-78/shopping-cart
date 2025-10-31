import bookGif from "../../assets/Book.gif";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <h1>Loading books...</h1>
      <img src={bookGif} alt="loading animation" />
    </div>
  );
}
