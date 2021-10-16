import React from "react";
import { screen } from "@testing-library/react";
import { renderWithContext } from "../../test-utils";
import { Cart } from "./Cart";

test("An empty cart should not have any items", () => {
  renderWithContext(<Cart />);
  const rows = screen.getAllByRole("row");
  expect(rows).toHaveLength(2);
  screen.getByText("$0.00", { selector: ".total" });
});
