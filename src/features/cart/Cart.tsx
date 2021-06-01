import React from "react";
import styles from "./Cart.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import classNames from "classnames";
import {
  removeFromCart,
  checkout,
  checkoutAction,
  checkoutThunk,
  getTotalPrice,
  updateQuantity,
} from "./cartSlice";

export function Cart() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  const checkoutState = useAppSelector((state) => state.cart.checkoutState);
  const errorMessage = useAppSelector((state) => state.cart.errorMessage);
  const products = useAppSelector((state) => state.products.products);
  const totalPrice = useAppSelector(getTotalPrice);
  function onQuantityChanged(
    e: React.FocusEvent<HTMLInputElement>,
    id: string
  ) {
    const quantity = Number(e.target.value) || 0;
    dispatch(updateQuantity({ id, quantity }));
  }
  function onCheckout(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // prevent the form from submitting
    dispatch(checkout());
  }
  const classes = classNames({
    [styles.table]: true,
    [styles.checkoutError]: checkoutState === "ERROR",
    [styles.checkoutLoading]: checkoutState === "LOADING",
  });
  return (
    <main className="page">
      <h1>Shopping Cart</h1>
      <table className={classes}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(items).map(([id, quantity]) => (
            <tr key={id}>
              <td>{products[id].name}</td>
              <td>
                <input
                  type="text"
                  onBlur={(e) => onQuantityChanged(e, id)}
                  className={styles.input}
                  defaultValue={quantity}
                />
              </td>
              <td>${products[id].price}</td>
              <td>
                <button
                  onClick={() => dispatch(removeFromCart(id))}
                  aria-label={`Remove ${products[id].name} from Shopping Cart`}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
          {/* <tr>
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
          </tr> */}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td className={styles.total}>${totalPrice}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <form onSubmit={onCheckout}>
        {checkoutState === "ERROR" ? (
          <p className={styles.errorBox}>{errorMessage}</p>
        ) : null}
        <button className={styles.button} type="submit">
          Checkout
        </button>
      </form>
    </main>
  );
}
