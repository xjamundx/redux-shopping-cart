import productsReducer, { productsReceived } from "./productsSlice";
import products from "../../../public/products.json";

describe("products reducer", () => {
  it("should return the initial state when passed an empty action", () => {
    const initialState = undefined;
    const action = { type: "" };
    const result = productsReducer(initialState, action);
    expect(result).toEqual({ products: {} });
  });
  it("should convert the products received to an object", () => {
    const initialState = undefined;
    const action = receivedProducts(products);
    const result = productsReducer(initialState, action);
    expect(Object.keys(result.products).length).toEqual(products.length);
    products.forEach((product) => {
      expect(result.products[product.id]).toEqual(product);
    });
  });
});
