import { useEffect, useState } from "react";
import styles from "./Products.module.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((products) => products.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);
  return (
    <section className="Page">
      <ul className={styles.products}>
        {products.map((product) => (
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
                <button>Add to Cart 🛒</button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
