import { useEffect } from "react";
import styles from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { receiveNewProducts } from "./productsSlice";
import { addToCart } from "../cart/cartSlice";
import productsData from "../../data/products.json";

export default function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(receiveNewProducts(productsData));
  }, [dispatch]);
  const products = useSelector((state) => {
    console.log("what", state.products);
    return state.products.products;
  });
  return (
    <section className="Page">
      <ul className={styles.products}>
        {Object.values(products).map((product) => (
          <li key={product.name}>
            <article className={styles.product}>
              <img src={product.imageURL} alt={product.imageAlt} />
              <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <button
                  aria-label="Add to Cart"
                  onClick={() => dispatch(addToCart(product.id))}
                >
                  Add to Cart 🛒
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
