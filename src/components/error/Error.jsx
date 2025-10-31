import { Link } from "react-router";
import styles from "./Error.module.css";
import sadGif from "../../assets/sad-face.gif";

export default function Error() {
  return (
    <div className={styles.main}>
      <h1>Uh oh...</h1>
      <img src={sadGif} alt="sad face" />
      <h2>Something must have went wrong :(</h2>
      <Link to="/">
        <button>Return to homepage</button>
      </Link>
    </div>
  );
}
