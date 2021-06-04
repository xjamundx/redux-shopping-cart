import cartReducer, {
  CartState,
  updateQuantity,
  addToCart,
  removeFromCart,
  getTotal,
  checkout,
  checkoutAction,
  getMemoizedTotal,
} from "./cartSlice";
import { RootState } from "../../app/store";

jest.mock("../../app/api", () => {
  return {
    async getProducts() {
      return [];
    },
    async checkout(items = {}) {
      const empty = Object.keys(items).length === 0;
      if (empty) throw new Error("Must include cart items");
      return { success: true };
    },
  };
});

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
  describe("extra reducers", () => {
    it("should respond to pending checkout action", () => {
      const initialState: CartState = {
        checkoutState: "READY",
        errorMessage: "",
        items: {},
      };
      const action = { type: checkout.pending.type };
      const state = cartReducer(initialState, action);
      expect(state.checkoutState).toEqual("LOADING");
    });
    it("should respond to fulfilled checkout action with an error", () => {
      const initialState: CartState = {
        checkoutState: "READY",
        errorMessage: "",
        items: {},
      };
      const action = {
        type: checkout.fulfilled.type,
        payload: { success: false },
      };
      const state = cartReducer(initialState, action);
      expect(state.checkoutState).toEqual("ERROR");
    });
    it("should respond to fulfilled checkout action with success", () => {
      const initialState: CartState = {
        checkoutState: "READY",
        errorMessage: "",
        items: { abc: 123 },
      };
      const action = {
        type: checkout.fulfilled.type,
        payload: { success: true },
      };
      const state = cartReducer(initialState, action);
      expect(state.checkoutState).toEqual("READY");
      expect(state.items).toEqual({});
    });
    it("should respond to rejected checkout action", () => {
      const initialState: CartState = {
        checkoutState: "READY",
        errorMessage: "",
        items: { abc: 123 },
      };
      const action = { type: checkout.rejected.type, error: new Error("what") };
      const state = cartReducer(initialState, action);
      expect(state.checkoutState).toEqual("ERROR");
      expect(state.errorMessage).toEqual("what");
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

describe("thunks", () => {
  describe("checkoutAction()", () => {
    it("should dispatch two actions on failure", async () => {
      const thunk = checkoutAction();
      const dispatch = jest.fn();
      const state = {
        cart: {
          items: {},
        },
      } as RootState;
      await thunk(dispatch, () => state);
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: "cart/checkout/pending",
        },
      ]);
      expect(dispatch.mock.calls[1][0].type).toEqual("cart/checkout/rejected");
      // expect(dispatch).toHaveBeenCalledWith([{}, {}])
      // expect(dispatch).toHaveBeenCalledWith([
      //   { type: "cart/checkout/pending" },
      //   { type: "cart/checkout/rejected" },
      // ]);
    });
    it("should dispatch two actions on success", async () => {
      const thunk = checkoutAction();
      const dispatch = jest.fn();
      const state = {
        cart: {
          checkoutState: "READY",
          errorMessage: "",
          items: { a: 1 },
        } as CartState,
      } as RootState;
      await thunk(dispatch, () => state);
      expect(dispatch.mock.calls.map((call) => call[0].type)).toEqual([
        "cart/checkout/pending",
        "cart/checkout/fulfilled",
      ]);
    });
  });
  describe("checkout()", () => {
    it("should dispatch two actions on failure", async () => {
      const thunk = checkout();
      const dispatch = jest.fn();
      const state = {
        cart: {
          items: {},
        },
      } as RootState;
      await thunk(dispatch, () => state, {});
      expect(dispatch.mock.calls.map((call) => call[0].type)).toEqual([
        "cart/checkout/pending",
        "cart/checkout/rejected",
      ]);
    });
    it("should dispatch two actions on success", async () => {
      const thunk = checkout();
      const dispatch = jest.fn();
      const state = {
        cart: {
          checkoutState: "READY",
          errorMessage: "",
          items: { a: 1 },
        } as CartState,
      } as RootState;
      await thunk(dispatch, () => state, {});
      expect(dispatch.mock.calls.map((call) => call[0].type)).toEqual([
        "cart/checkout/pending",
        "cart/checkout/fulfilled",
      ]);
    });
  });
});
