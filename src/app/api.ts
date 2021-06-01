// import type { CartItems } from "../features/cart/cartSlice";
import type { Product } from "../features/products/Products";

type CartItems = {};

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("/products.json");
  const products = await response.json();
  return products;
}

export type CheckoutResponse = { success: boolean; error?: string };
export async function checkout(items: CartItems): Promise<CheckoutResponse> {
  const url = "/checkout-error.json";
  await sleep(500);
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(items),
  });
  const data = await response.json();
  if (!data.success) {
    throw new Error(data.error);
  }
  return data as CheckoutResponse;
}

const sleep = (time: number) =>
  new Promise<any>((res) => setTimeout(res, time));
