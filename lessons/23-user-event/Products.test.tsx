import { getByRole } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("should be able to add a banana to your cart", async () => {
  const { store } = renderWithContext(<Products />);
  const heading = await screen.findByRole("heading", { name: /Bananas/ });
  const button = getByRole(heading.parentNode as HTMLElement, "button");
  userEvent.click(button);
  expect(store.getState().cart.items["207"]).toEqual(1);
  userEvent.click(button);
  userEvent.click(button);
  expect(store.getState().cart.items["207"]).toEqual(3);
});
