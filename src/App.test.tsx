import { Home } from "./App";
import React from "react";
import { render, screen } from "@testing-library/react";

test("<Home>", () => {
  render(<Home />);
  expect(screen.getByRole("heading")).toHaveTextContent(
    "Welcome to the Store!"
  );
});
