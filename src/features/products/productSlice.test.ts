import productsReducer, { productsReceived } from "./productsSlice";

describe("products reducer", () => {
    it("should return the initial state when passed an empty action", () => {
        const intialState = undefined;
        const action = { type: "" };
        const result = productsReducer(intialState, action);
        expect(result).toEqual({ products: {} });
    });
});