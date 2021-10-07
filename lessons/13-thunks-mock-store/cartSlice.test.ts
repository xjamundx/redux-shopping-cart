import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const mockStore = configureStore([thunk]);

describe("checkoutCart w/mock redux store", () => {
  it("should checkout", async () => {
    const store = mockStore({ cart: { items: { testItem: 3 } } });
    await store.dispatch(checkoutCart() as any);
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0].type).toEqual("cart/checkout/pending");
    expect(actions[1].type).toEqual("cart/checkout/fulfilled");
    expect(actions[1].payload).toEqual({ success: true });
  });
  it("should fail with no items", async () => {
    const store = mockStore({ cart: { items: {} } });
    await store.dispatch(checkoutCart() as any);
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0].type).toEqual("cart/checkout/pending");
    expect(actions[1].type).toEqual("cart/checkout/rejected");
    expect(actions[1].payload).toEqual(undefined);
    expect(actions[1].error.message).toEqual('Must include cart items');
  });
});