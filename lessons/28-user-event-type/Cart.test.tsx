test("Updating product quantity should update total", () => {
  const state = getStateWithItems(
    { testItem: 3 },
    { testItem: { name: "Test Product", price: 11.11 } as Product }
  );
  renderWithContext(<Cart />, state);
  const rows = screen.getAllByRole("row");
  expect(rows).toHaveLength(3);
  screen.getByText("$33.33", { selector: ".total" });
  const input = screen.getByLabelText(/test product quantity/i);
  userEvent.clear(input);
  userEvent.tab();
  screen.getByText("$0.00", { selector: ".total" });
  userEvent.type(input, "4");
  userEvent.tab();
  screen.getByText("$44.44", { selector: ".total" });
});
