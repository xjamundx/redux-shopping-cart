import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {
    // "1234": {
    //   id: "1234",
    //   name: "Sample Product",
    //   description: "A wonderul product",
    //   imageURL: "/images/1234.jpg",
    // },
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    receiveNewProducts: (state, action) => {
      action.payload.forEach((product) => {
        state.products[product.id] = product;
      });
    },
  },
});

export const { receiveNewProducts } = productsSlice.actions;

export default productsSlice.reducer;
