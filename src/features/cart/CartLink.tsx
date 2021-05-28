// import { Link } from "react-router-dom";
import React from "react";
import styles from "./Cart.module.css";

export default function CartLink() {
  return (
    <a className={`App-navLink ${styles.cartLink}`} href="/cart">
      <span className={styles.cartLinkContents}>🛒&nbsp;&nbsp;Cart</span>
    </a>
  );
}
