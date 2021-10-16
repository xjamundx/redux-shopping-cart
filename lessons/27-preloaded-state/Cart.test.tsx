import { getStateWithItems } from "../../test-utils";
import { Product } from "../../app/api";

test("Cart should display correct total", () => {
  const state = getStateWithItems(
    { testItem: 3 },
    { testItem: { name: "Test Product", price: 11.11 } as Product }
  );
  renderWithContext(<Cart />, state);
  const rows = screen.getAllByRole("row");
  expect(rows).toHaveLength(3);
  screen.getByText("$33.33", { selector: ".total" });
});
