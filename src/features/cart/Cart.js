import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, updateQuantity, clearCart } from "./cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.products);
  const totals = {};
  let total = 0;
  for (let id in items) {
    totals[id] = (products[id].price * items[id]).toFixed(2);
    total += Number(totals[id]);
  }
  function onCheckout(e) {
    e.preventDefault();
    dispatch(clearCart());
    window.location.href = "/";
  }
  function onQuantityChange(e, id) {
    const quantity = Number(e.target.value);
    dispatch(updateQuantity({ id, quantity }));
  }
  return (
    <section className="Page">
      <h1>Shopping Cart</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Product</td>
            <td>Quantity</td>
            <td>Total</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {Object.entries(items).map(([id, quantity]) => (
            <tr>
              <td>{products[id].name}</td>
              <td>
                <input
                  className={styles.input}
                  onBlur={(e) => onQuantityChange(e, id)}
                  type="text"
                  defaultValue={quantity}
                />
              </td>
              <td>${totals[id]}</td>
              <td>
                <button onClick={() => dispatch(clearItem(id))}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td className={styles.total}>${total.toFixed(2)}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <form onSubmit={onCheckout}>
        <button className={styles.button}>Checkout</button>
      </form>
    </section>
  );
}
