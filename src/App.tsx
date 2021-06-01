import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Cart } from "./features/cart/Cart";
import { CartLink } from "./features/cart/CartLink";
import { Products } from "./features/products/Products";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/">
            Home
          </Link>
          <Link className={styles.navLink} to="/products">
            Products
          </Link>
          <CartLink />
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export function Home() {
  return (
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
  );
}

export default App;
