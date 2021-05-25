import { useEffect } from "react";
import styles from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { receiveNewProducts } from "./productsSlice";
import { addToCart } from "../cart/cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("/products.json")
      .then((products) => products.json())
      .then((products) => {
        dispatch(receiveNewProducts(products));
      });
  }, [dispatch]);
  const products = useSelector((state) => state.products.products);
  return (
    <section className="Page">
      <ul className={styles.products}>
        {Object.values(products).map((product) => (
          <li key={product.name}>
            <article className={styles.product}>
              <figure>
                <img src={product.imageURL} alt={product.imageAlt} />
                <figcaption className={styles.caption}>
                  {product.imageCredit}
                </figcaption>
              </figure>
              <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button onClick={() => dispatch(addToCart(product.id))}>
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
