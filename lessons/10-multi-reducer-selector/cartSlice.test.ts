import { getTotalPrice, CartState } from "./cartSlice";
import type { RootState } from "../../app/store";
import products from "../../../public/products.json";

describe("selectors", () => {
  describe("getTotalPrice", () => {
    it("should return 0 with an empty cart", () => {
      const state: RootState = {
        cart: { checkoutState: "READY", errorMessage: "", items: {} },
        products: { products: {} },
      };
      const result = getTotalPrice(state);
      expect(result).toEqual("0.00");
    });
    it("should add up the totals", () => {
      const state: RootState = {
        cart: {
          checkoutState: "READY",
          errorMessage: "",
          items: {
            [products[0].id]: 3,
            [products[1].id]: 4,
          },
        },
        products: {
          products: {
            [products[0].id]: products[0],
            [products[1].id]: products[1],
          },
        },
      };
      const result = getTotalPrice(state);
      expect(result).toEqual("43.23");
    });
    it("should not compute again with the same state", () => {
      const state: RootState = {
        cart: {
          checkoutState: "READY",
          errorMessage: "",
          items: {
            [products[0].id]: 3,
            [products[1].id]: 4,
          },
        },
        products: {
          products: {
            [products[0].id]: products[0],
            [products[1].id]: products[1],
          },
        },
      };
      getTotalPrice.resetRecomputations();
      const result = getTotalPrice(state);
      expect(result).toEqual("43.23");
      expect(getTotalPrice.recomputations()).toEqual(1);
      getTotalPrice(state);
      expect(getTotalPrice.recomputations()).toEqual(1);
    });
    it("should recompute with new products", () => {
      const state: RootState = {
        cart: {
          checkoutState: "READY",
          errorMessage: "",
          items: {
            [products[0].id]: 3,
            [products[1].id]: 4,
          },
        },
        products: {
          products: {
            [products[0].id]: products[0],
            [products[1].id]: products[1],
          },
        },
      };
      getTotalPrice.resetRecomputations();
      let result = getTotalPrice(state);
      expect(result).toEqual("43.23");
      expect(getTotalPrice.recomputations()).toEqual(1);
      state.products.products = {
        [products[0].id]: products[0],
        [products[1].id]: products[1],
        [products[2].id]: products[2],
      };
      result = getTotalPrice({ ...state });
      expect(result).toEqual("43.23");
      expect(getTotalPrice.recomputations()).toEqual(2);
    });
    it("should recompute when cart changes", () => {
      const state: RootState = {
        cart: {
          checkoutState: "READY",
          errorMessage: "",
          items: {
            [products[0].id]: 3,
            [products[1].id]: 4,
          },
        },
        products: {
          products: {
            [products[0].id]: products[0],
            [products[1].id]: products[1],
          },
        },
      };
      getTotalPrice.resetRecomputations();
      let result = getTotalPrice(state);
      expect(result).toEqual("43.23");
      expect(getTotalPrice.recomputations()).toEqual(1);
      state.cart.items = {};
      result = getTotalPrice({ ...state });
      expect(result).toEqual("0.00");
      expect(getTotalPrice.recomputations()).toEqual(2);
    });
  });
});
