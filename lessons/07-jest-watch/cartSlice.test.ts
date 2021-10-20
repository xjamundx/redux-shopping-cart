import cartReducer, {
  CartState,
  updateQuantity,
  addToCart,
  removeFromCart,
} from "./cartSlice";
import type { RootState } from "../../app/store";

// initially it looked like this:
// describe("cart reducer", () => {
//   test.todo(“an empty action”);
//   test.todo(“addToCart”);
//   test.todo(“removeFromCart”);
//   test.todo(“updateQuantity”);
// });

describe("cart reducer", () => {
  test("an empty action", () => {
    const initialState = undefined;
    const action = { type: "" };
    const state = cartReducer(initialState, action);
    expect(state).toEqual({
      checkoutState: "READY",
      errorMessage: "",
      items: {},
    });
  });
  test("addToCart", () => {
    const initialState = undefined;
    const action = addToCart("abc");
    let state = cartReducer(initialState, action);
    expect(state).toEqual({
      checkoutState: "READY",
      errorMessage: "",
      items: { abc: 1 },
    });
    state = cartReducer(state, action);
    state = cartReducer(state, action);
    expect(state).toEqual({
      checkoutState: "READY",
      errorMessage: "",
      items: { abc: 3 },
    });
  });
  test("removeFromCart", () => {
    const initialState: CartState = {
      checkoutState: "READY",
      errorMessage: "",
      items: { abc: 1, def: 3 },
    };
    const action = removeFromCart("abc");
    const state = cartReducer(initialState, action);
    expect(state).toEqual({
      checkoutState: "READY",
      errorMessage: "",
      items: { def: 3 },
    });
  });
  test("updateQuantity", () => {
    const initialState: CartState = {
      checkoutState: "READY",
      errorMessage: "",
      items: { abc: 1, def: 3 },
    };
    const action = updateQuantity({ id: "def", quantity: 5 });
    const state = cartReducer(initialState, action);
    expect(state).toEqual({
      checkoutState: "READY",
      errorMessage: "",
      items: { abc: 1, def: 5 },
    });
  });
});
