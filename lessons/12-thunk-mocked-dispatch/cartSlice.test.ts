describe("thunks", () => {
  describe("checkoutCart w/mocked dispatch", () => {
    it("should checkout", async () => {
      const dispatch = jest.fn();
      const state: RootState = {
        products: { products: {} },
        cart: { checkoutState: "READY", errorMessage: "", items: { abc: 123 } },
      };
      const thunk = checkoutCart();
      await thunk(dispatch, () => state, undefined);
      const { calls } = dispatch.mock;
      expect(calls).toHaveLength(2);
      expect(calls[0][0].type).toEqual("cart/checkout/pending");
      expect(calls[1][0].type).toEqual("cart/checkout/fulfilled");
      expect(calls[1][0].payload).toEqual({ success: true });
    });
    it("should fail with no items", async () => {
      const dispatch = jest.fn();
      const state: RootState = {
        products: { products: {} },
        cart: { checkoutState: "READY", errorMessage: "", items: {} },
      };
      const thunk = checkoutCart();
      await thunk(dispatch, () => state, undefined);
      const { calls } = dispatch.mock;
      expect(calls).toHaveLength(2);
      expect(calls[0][0].type).toEqual("cart/checkout/pending");
      expect(calls[1][0].type).toEqual("cart/checkout/rejected");
      expect(calls[1][0].payload).toEqual(undefined);
      expect(calls[1][0].error.message).toEqual('Must include cart items');
    });
  });
});