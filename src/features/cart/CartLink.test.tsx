import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { CartLink } from "./CartLink";
import { store } from "../../app/store";
import { updateQuantity, addToCart, removeFromCart } from "../cart/cartSlice";

test("<CartLink/> should contain a link", () => {
    renderWithContext(<CartLink />);
    expect(screen.getByRole("link")).toBeInTheDocument();
});
test("<CartLink/> should show the correct number of items", () => {
    store.dispatch(addToCart("abc"));
    renderWithContext(<CartLink />);
    expect(screen.getByRole("link")).toHaveTextContent("1");
    store.dispatch(updateQuantity({id: "abc", quantity: 5}));
    expect(screen.getByRole("link")).toHaveTextContent("5");
    store.dispatch(removeFromCart("abc"))
});
test("<CartLink/> should show text when there are no items", () => {
    renderWithContext(<CartLink />);
    const link = screen.getByRole("link")
    expect(link).toHaveTextContent("Cart");
    expect(link).not.toHaveTextContent("1");
});

function renderWithContext(children: React.ReactElement) {
    render(<Provider store={store}><Router>{children}</Router></Provider>);
}