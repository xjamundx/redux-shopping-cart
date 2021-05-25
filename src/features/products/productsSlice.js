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
    receivedNewProducts: (state, action) => {
      action.payload.forEach((product) => {
        state.products[product.id] = product;
      });
    },
  },
});

export const { receivedNewProducts } = productsSlice.actions;

export default productsSlice.reducer;
