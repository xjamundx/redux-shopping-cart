import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getNumItems } from "./cartSlice";
import styles from "./Cart.module.css";

export default function CartLink() {
  const numItems = useSelector(getNumItems);
  return (
    <Link className={`App-navLink ${styles.cartLink}`} to="/cart">
      <span className={styles.cartLinkContents}>
        🛒&nbsp;&nbsp;
        {numItems > 0 ? <b>{numItems}</b> : "Cart"}
      </span>
    </Link>
  );
}
