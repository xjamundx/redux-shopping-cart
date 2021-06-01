import productsReducer, { productsReceived } from "./productsSlice";
import products from "../../../public/products.json";

describe("products reducer", () => {
  it("should return the intial state when passed an invalid action", () => {
    const initialState = undefined;
    const action = { type: "" };
    const result = productsReducer(initialState, action);
    expect(result).toEqual({ products: {} });
  });
  it("should return the products state when passed productsReceived action", () => {
    const initialState = undefined;
    const action = productsReceived(products.slice(0, 2));
    const state = productsReducer(initialState, action);
    expect(Object.keys(state.products).length).toEqual(2);
    expect(state.products[products[0].id]).toEqual(products[0]);
  });
  it("should not allow same product to be added more than once", () => {
    const initialState = undefined;
    const action = productsReceived(products.slice(0, 2));
    const firstState = productsReducer(initialState, action);
    expect(Object.keys(firstState.products).length).toEqual(2);
    const laterState = productsReducer(firstState, action);
    expect(Object.keys(laterState.products).length).toEqual(2);
  });
  it("should allow additional products to be added", () => {
    const initialState = undefined;
    const firstAction = productsReceived(products.slice(0, 2));
    const firstState = productsReducer(initialState, firstAction);
    expect(Object.keys(firstState.products).length).toEqual(2);
    const secondAction = productsReceived(products.slice(2, 4));
    const laterState = productsReducer(firstState, secondAction);
    expect(Object.keys(laterState.products).length).toEqual(4);
  });
});
