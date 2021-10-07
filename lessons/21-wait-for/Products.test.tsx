import React from "react";
import { screen, waitFor } from "@testing-library/react";
import { Products } from "./Products";
import mockProducts from "../../../public/products.json";
import * as api from "../../app/api";

const getProductsSpy = jest.spyOn(api, "getProducts");
getProductsSpy.mockResolvedValue(mockProducts);

test("Several products should be listed", async () => {
  const { debug } = renderWithContext(<Products />);
  await waitFor(() => expect(getProductsSpy).toHaveBeenCalledTimes(1));
  const articles = screen.getAllByRole("article");
  expect(articles.length).toEqual(mockProducts.length);
});
