import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

export default function CartLink() {
  return (
    <Link className={`App-navLink ${styles.cartLink}`} to="/cart">
      <span className={styles.cartLinkContents}>🛒&nbsp;&nbsp;Cart</span>
    </Link>
  );
}
