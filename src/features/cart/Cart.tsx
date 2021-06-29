import React from "react";
import styles from "./Cart.module.css";

export function Cart() {
  return (
    <main className="page">
      <h1>Shopping Cart</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Magnifying Glass</td>
            <td>
              <input type="text" className={styles.input} defaultValue={21} />
            </td>
            <td>$44.44</td>
            <td>
              <button aria-label="Remove Magnifying Glass from Shopping Cart">
                X
              </button>
            </td>
          </tr>
          <tr>
            <td>Football Cleats</td>
            <td>
              <input type="text" className={styles.input} defaultValue={17} />
            </td>
            <td>$25.99</td>
            <td>
              <button aria-label="Remove Football Cleats from Shopping Cart">
                X
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td className={styles.total}>${0.0}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <form>
        <button className={styles.button} type="submit">
          Checkout
        </button>
      </form>
    </main>
  );
}
