test("removing items should update total", async () => {
  const state = getStateWithItems(
    { carrots: 2, bunnies: 3 },
    {
      carrots: { name: "carrots", price: 5.5 } as Product,
      bunnies: { name: "bunnies", price: 20.0 } as Product,
    }
  );
  renderWithContext(<Cart />, state);
  screen.getByText("$71.00", { selector: ".total" });
  const removeBunnies = screen.getByTitle(/remove bunnies/i);
  userEvent.click(removeBunnies);
  screen.getByText("$11.00", { selector: ".total" });
  const removeCarrots = screen.getByTitle(/remove carrots/i);
  userEvent.click(removeCarrots);
  screen.getByText("$0.00", { selector: ".total" });
});
