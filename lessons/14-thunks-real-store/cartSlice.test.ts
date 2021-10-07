import { RootState, getStoreWithState } from "../../app/store";

describe("thunks", () => {
  describe("checkoutCart w/full redux store", () => {
    it("should checkout with items", async () => {
      const state = getStateWithItems({ testItem: 3 });
      const store = getStoreWithState(state);
      await store.dispatch(checkoutCart());
      expect(store.getState().cart).toEqual({
        items: {},
        errorMessage: "",
        checkoutState: "READY"
      })
    });
    it("should fail with no items", async () => {
      const state = getStateWithItems({});
      const store = getStoreWithState(state);
      await store.dispatch(checkoutCart());
      expect(store.getState().cart).toEqual({
        items: {},
        checkoutState: "ERROR",
        errorMessage: "Must include cart items"
      })
    });
  });
});

function getStateWithItems(items: Record<string, number>): RootState {
  const state: RootState = {
    products: { products: {} },
    cart: { errorMessage: "", checkoutState: "READY", items }
  }
  return state
}