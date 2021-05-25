import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {
    // "1234": 4 // ID and quantity
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (action.payload in state.items) {
        state.items[action.payload]++;
      } else {
        state.items[action.payload] = 1;
      }
    },
    updateQuantity: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
    },
    clearItem: (state, action) => {
      delete state.items[action.payload];
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addToCart, updateQuantity, clearCart, clearItem } =
  cartSlice.actions;

export const getNumItems = (state) => {
  let numItems = 0;
  Object.values(state.cart.items).forEach((quantity) => {
    numItems += quantity;
  });
  return numItems;
};

export default cartSlice.reducer;
