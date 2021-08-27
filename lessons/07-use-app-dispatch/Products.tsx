import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { receivedProducts } from "./productsSlice";
import { getProducts } from "../../app/api";
import styles from "./Products.module.css";

export function Products() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  useEffect(() => {
    getProducts().then((products) => {
      dispatch(receivedProducts(products));
    });
  }, []);
  return (
    <main className="page">
      <ul className={styles.products}>
        {Object.values(products).map((product) => (
          <li key={product.id}>
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
                <button>Add to Cart 🛒</button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
