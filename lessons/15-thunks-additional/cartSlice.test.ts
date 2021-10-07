jest.mock("../../app/api", () => {
  return {
    async getProducts() {
      return [];
    },
    async checkout(items: api.CartItems = {}) {
      const empty = Object.keys(items).length === 0;
      if (empty) throw new Error("Must include cart items");
      if (items.evilItem > 0) throw new Error();
      if (items.badItem > 0) return { success: false };
      return { success: true };
    }
  };
});

describe("thunks", () => {
  describe("checkoutCart w/full redux store", () => {
    it("should handle an error response", async () => {
      const state = getStateWithItems({ badItem: 7 });
      const store = getStoreWithState(state);
      await store.dispatch(checkoutCart());
      expect(store.getState().cart).toEqual({
        items: { badItem: 7 },
        checkoutState: "ERROR",
        errorMessage: ""
      });
    });
    it("should handle an empty error message", async () => {
      const state = getStateWithItems({ evilItem: 7 });
      const store = getStoreWithState(state);
      await store.dispatch(checkoutCart());
      expect(store.getState().cart).toEqual({
        items: { evilItem: 7 },
        checkoutState: "ERROR",
        errorMessage: ""
      });
    });
    it("should be pending before checking out", async () => {
      const state = getStateWithItems({ goodItem: 7 });
      const store = getStoreWithState(state);
      expect(store.getState().cart.checkoutState).toEqual("READY");
      const action = store.dispatch(checkoutCart());
      expect(store.getState().cart.checkoutState).toEqual("LOADING");
      await action;
      expect(store.getState().cart.checkoutState).toEqual("READY");
    });
  });
});