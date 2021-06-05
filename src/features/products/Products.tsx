import React, { useEffect, useState, } from "react";

export function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/products.json")
            .then(result => result.json())
            .then((products) => {
                setProducts(products)
            });
    }, []);
    return (
        <main className="page">
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li>{product.name}</li>
                ))}
            </ul>
        </main>
    )
}