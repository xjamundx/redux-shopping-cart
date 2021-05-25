import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Products from "./features/products/Products";
import CartLink from "./features/cart/CartLink";
import Cart from "./features/cart/Cart";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-nav">
          <Link className="App-navLink" to="/">
            Home
          </Link>
          <Link className="App-navLink" to="/products">
            Products
          </Link>
          <CartLink />
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section className="Page">
      <h1>Welcome to the Store!</h1>
      <figure>
        <img
          src="/store.jpg"
          alt="A large old store that says 1889 THE BIG STORE"
          width="800"
        />
        <figcaption>Gary Houston, CC0, via Wikimedia Commons</figcaption>
      </figure>
    </section>
  );
}

export default App;
