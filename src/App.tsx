import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <nav className={styles.nav}>
        <a className={styles.navLink} href="/">
          Home
        </a>
        <a className={styles.navLink} href="/products">
          Products
        </a>
        <a className={styles.navLink} href="/cart">
          Cart
        </a>
      </nav>
      <main className="page">
        <h1>Welcome to the Store!</h1>
        <figure>
          <img
            src="/store.jpg"
            alt="A large old store that says 1889 THE BIG STORE"
            width="800"
          />
          <figcaption>Gary Houston, CC0, via Wikimedia Commons</figcaption>
        </figure>
      </main>
    </div>
  );
}

export default App;
