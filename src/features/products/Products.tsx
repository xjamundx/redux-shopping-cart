import React, { useEffect, useState, } from "react";

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
            <ul>
                {products.map(product => (
                    <li>{product.name}</li>
                ))}
            </ul>
        </main>
    )
}