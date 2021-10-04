import cartReducer, { CartState, getNumItems } from "./cartSlice";
import type { RootState } from "../../app/store";

describe("selectors", () => {
  describe("getNumItems", () => {
    it("should return 0 with no items", () => {
      const cart: CartState = {
        checkoutState: "READY",
        errorMessage: "",
        items: {},
      };
      const result = getNumItems({ cart } as RootState);
      expect(result).toEqual(0);
    });
    it("should add up the total", () => {
      const cart: CartState = {
        checkoutState: "READY",
        errorMessage: "",
        items: { abc: 3, def: 3 },
      };
      const result = getNumItems({ cart } as RootState);
      expect(result).toEqual(6);
    });
  });
});
