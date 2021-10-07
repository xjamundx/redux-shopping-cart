test("should be able to add a banana to your cart", async () => {
  const { store } = renderWithContext(<Products />);
  const button = await screen.findByRole("button", { name: /Bananas/i });
  userEvent.click(button);
  expect(store.getState().cart.items["207"]).toEqual(1);
  userEvent.click(button);
  userEvent.click(button);
  expect(store.getState().cart.items["207"]).toEqual(3);
});
