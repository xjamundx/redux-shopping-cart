import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
        </nav>
      </header>
      <main className="page">
        <h1>Welcome to the Store</h1>
        <figure>
          <img src="https://github.com/xjamundx/redux-shopping-cart/blob/main/public/store.jpg?raw=true"
               alt="A large old storefront that says 1889 the big store"
               width="800"/>
          <figcaption>Gary Houston, CC0, via Wikimedia Commons</figcaption>
        </figure>
      </main>
    </div>
  )
}

export default App
