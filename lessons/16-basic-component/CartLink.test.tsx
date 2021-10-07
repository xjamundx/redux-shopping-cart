import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { CartLink } from "./CartLink";
import { store } from "../../app/store";

test("should contain a link", () => {
  renderWithContext(<CartLink />);
  expect(screen.getByRole("link")).toBeInTheDocument();
});

function renderWithContext(element: React.ReactElement) {
  render(
    <Provider store={store}>
      <Router>{element}</Router>
    </Provider>
  );
}
