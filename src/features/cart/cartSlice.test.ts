import cartReducer, {
  CartState,
  updateQuantity,
  addToCart,
  removeFromCart,
  getTotal,
  getMemoizedTotal,
} from "./cartSlice";
import { RootState } from "../../app/store";

describe("Cart Reducer", () => {
  it("should return initial state when sent an empty action", () => {
    const initialState = undefined;
    const action = { type: "empty" };
    const state = cartReducer(initialState, action);
    expect(state).toEqual({
      checkoutState: "READY",
      errorMessage: "",
      items: {},
    });
  });
  it("should allow you to add to cart (as many times as you want)", () => {
    const initialState = undefined;
    const action = addToCart("1230");
    let state;
    state = cartReducer(initialState, action);
    expect(state.items).toEqual({
      "1230": 1,
    });
    state = cartReducer(state, action);
    expect(state.items).toEqual({
      "1230": 2,
    });
    state = cartReducer(state, action);
    expect(state.items).toEqual({
      "1230": 3,
    });
  });
  it("should support removing an item from the cart", () => {
    const initialState: CartState = {
      checkoutState: "READY",
      errorMessage: "",
      items: { abc: 2, def: 3, ghi: 4 },
    };
    const action = removeFromCart("def");
    const state = cartReducer(initialState, action);
    expect(state.items).toEqual({
      abc: 2,
      ghi: 4,
    });
  });
  it("should update the quantity of an existing item", () => {
    const initialState: CartState = {
      checkoutState: "READY",
      errorMessage: "",
      items: { abc: 2, def: 3, ghi: 4 },
    };
    const action = updateQuantity({ id: "def", quantity: 7 });
    const state = cartReducer(initialState, action);
    expect(state.items).toEqual({
      abc: 2,
      def: 7,
      ghi: 4,
    });
  });
});

describe("selectors", () => {
  describe("getTotal()", () => {
    it("should return 0 with no items", () => {
      const cart: CartState = {
        errorMessage: "",
        checkoutState: "READY",
        items: {},
      };
      const result = getTotal({ cart } as RootState);
      expect(result).toEqual(0);
    });
    it("should add up the totals", () => {
      const cart: CartState = {
        errorMessage: "",
        checkoutState: "READY",
        items: {
          abc: 7,
          efg: 8,
        },
      };
      const result = getTotal({ cart } as RootState);
      expect(result).toEqual(15);
    });
  });
  describe("getMemoizedTotal()", () => {
    it("should return 0 with no items", () => {
      const cart: CartState = {
        errorMessage: "",
        checkoutState: "READY",
        items: {},
      };
      const result = getMemoizedTotal({ cart } as RootState);
      expect(result).toEqual(0);
    });
    it("should add up the totals", () => {
      const cart: CartState = {
        errorMessage: "",
        checkoutState: "READY",
        items: {
          abc: 7,
          efg: 8,
        },
      };
      const result = getMemoizedTotal({ cart } as RootState);
      expect(result).toEqual(15);
    });
    it("should not compute again with same state", () => {
      const cart: CartState = {
        errorMessage: "",
        checkoutState: "READY",
        items: {
          abc: 7,
          efg: 8,
        },
      };
      getMemoizedTotal.resetRecomputations();
      const result = getMemoizedTotal({ cart } as RootState);
      expect(getMemoizedTotal.recomputations()).toEqual(1);
      expect(result).toEqual(15);
      getMemoizedTotal({ cart } as RootState);
      getMemoizedTotal({ cart } as RootState);
      getMemoizedTotal({ cart } as RootState);
      expect(getMemoizedTotal.recomputations()).toEqual(1);
    });
    it("should compute again with different state", () => {
      const cart: CartState = {
        errorMessage: "",
        checkoutState: "READY",
        items: {
          abc: 7,
          efg: 8,
        },
      };
      let result;
      getMemoizedTotal.resetRecomputations();
      result = getMemoizedTotal({ cart } as RootState);
      expect(getMemoizedTotal.recomputations()).toEqual(1);
      expect(result).toEqual(15);
      cart.items = { ...cart.items, def: 4 };
      result = getMemoizedTotal({ cart } as RootState);
      expect(result).toEqual(19);
      expect(getMemoizedTotal.recomputations()).toEqual(2);
    });
  });
});
