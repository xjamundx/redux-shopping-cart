import React, { useEffect, useState, } from "react";
import styles from "./Products.module.css";

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageURL: string;
    imageAlt: string;
    imageCredit: string;
}

export function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch("/products.json")
            .then(result => result.json())
            .then((products: Product[]) => {
                setProducts(products)
            });
    }, []);
    return (
        <main className="page">
            <h1>Products</h1>
            <ul className={styles.products}>
                {products.map(product => (
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
    )
}