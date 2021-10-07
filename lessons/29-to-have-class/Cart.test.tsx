import { Product } from "../../app/api";

type Product = api.Product;

const checkoutSpy = jest.spyOn(api, "checkout");

test("cannot checkout with an empty cart", async () => {
  checkoutSpy.mockRejectedValueOnce(new Error("Cart must not be empty"));
  renderWithContext(<Cart />);
  const checkout = screen.getByRole("button", { name: "Checkout" });
  const table = screen.getByRole("table");
  expect(table).not.toHaveClass("checkoutLoading");
  userEvent.click(checkout);
  expect(table).toHaveClass("checkoutLoading");
  await screen.findByText("Cart must not be empty", { selector: ".errorBox" });
  expect(table).toHaveClass("checkoutError");
});
