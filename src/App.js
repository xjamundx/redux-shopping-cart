import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
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
          <Link className="App-navLink" to="/counter">
            Sample Counter
          </Link>
          <CartLink />
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/counter">
            <CounterPage />
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

function CounterPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}
export default App;
