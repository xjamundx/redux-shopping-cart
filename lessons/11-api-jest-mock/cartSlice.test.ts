import * as api from "../../app/api";

jest.mock("../../app/api", () => {
  return {
    async getProducts() {
      return [];
    },
    async checkout(items: api.CartItems = {}) {
      const empty = Object.keys(items).length === 0;
      if (empty) throw new Error("Must include cart items");
      if (items.badItem > 0) return { success: false };
      return { success: true };
    }
  }
})

test("checkout should work", async () => {
  await api.checkout({ fakeItem: 4 });
});