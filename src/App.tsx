import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import styles from './App.module.css'


function App() {
  return (
      <Router>
        <div className={styles.app}>
          <header className={styles.header}>
            <nav>
              <Link to="/" className={styles.link}>Home</Link>
              <Link to="/products" className={styles.link}>Products</Link>
              <Link to="/cart" className={styles.link}>Cart</Link>
            </nav>
          </header>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route  path="/products">Products</Route>
                <Route  path="/cart">Cart</Route>
            </Switch>
        </div>
      </Router>
  )
}

function Home() {
    return (
        <main className="page">
            <h1>Welcome to the Store</h1>
            <figure>
                <img src="https://github.com/xjamundx/redux-shopping-cart/blob/main/public/store.jpg?raw=true"
                     alt="A large old storefront that says 1889 the big store"
                     width="800"/>
                <figcaption>Gary Houston, CC0, via Wikimedia Commons</figcaption>
            </figure>
        </main>
    )
}

export default App
