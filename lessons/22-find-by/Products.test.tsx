test("Each individual product should contain a heading", async () => {
  renderWithContext(<Products />);
  for (let product of mockProducts) {
    await screen.findByRole("heading", { name: product.name });
  }
});
