import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithContext } from "../../test-utils";
import { Products } from "./Products";
import * as api from "../../app/api";
import mockProducts from "../../../public/products.json";

const getProductsSpy = jest.spyOn(api, "getProducts");
getProductsSpy.mockResolvedValue(mockProducts);

test("several products should be listed", async () => {
  renderWithContext(<Products />);
  await waitFor(() => expect(getProductsSpy).toHaveBeenCalledTimes(1));
  const articles = screen.getAllByRole("article");
  expect(articles.length).toEqual(mockProducts.length);
});

test("Each individual product should contain a heading", async () => {
  renderWithContext(<Products />);
  for (let product of mockProducts) {
    await screen.findByRole("heading", { name: product.name });
  }
});

test("should be able to add a banana to your cart", async () => {
  const { store } = renderWithContext(<Products />);
  const button = await screen.findByRole("button", { name: /Bananas/i });
  userEvent.click(button);
  expect(store.getState().cart.items["207"]).toEqual(1);
  userEvent.click(button);
  userEvent.click(button);
  expect(store.getState().cart.items["207"]).toEqual(3);
});
