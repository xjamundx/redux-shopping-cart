import styles from "./Cart.module.css";

export default function Cart() {
  function onCheckout(e) {
    e.preventDefault();
    window.location.href = "/";
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
          <tr>
            <td>Magnifying Glass</td>
            <td>
              <input className={styles.input} type="text" defaultValue={"10"} />
            </td>
            <td>${123.99}</td>
            <td>
              <button>X</button>
            </td>
          </tr>
          <tr>
            <td>Headphones</td>
            <td>
              <input className={styles.input} type="text" defaultValue={"10"} />
            </td>
            <td>${20.49}</td>
            <td>
              <button>X</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td className={styles.total}>$999.90</td>
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
