test("should clear items after checkout", async () => {
  checkoutSpy.mockResolvedValueOnce({ success: true });
  const state = getStateWithItems(
    { carrots: 2, bunnies: 3 },
    {
      carrots: { name: "carrots", price: 5.5 } as Product,
      bunnies: { name: "bunnies", price: 20.0 } as Product,
    }
  );
  renderWithContext(<Cart />, state);
  screen.getByText("$71.00", { selector: ".total" });
  expect(screen.getAllByRole("row")).toHaveLength(4);
  const checkout = screen.getByRole("button", { name: "Checkout" });
  userEvent.click(checkout);

  await waitFor(() => {
    screen.getByText("$0.00", { selector: ".total" });
    expect(screen.getAllByRole("row")).toHaveLength(2);
    expect(screen.getByRole("table")).not.toHaveClass("checkoutError");
  });
});
