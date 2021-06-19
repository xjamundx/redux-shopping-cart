export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageURL: string;
  imageAlt: string;
  imageCredit: string;
}

export async function getProducts(): Promise<Product[]> {
  const results = await fetch("/products.json");
  const products = results.json();
  return products;
}