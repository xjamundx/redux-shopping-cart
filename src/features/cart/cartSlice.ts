import {
  createSlice,
  PayloadAction,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import * as api from "../../app/api";
import { RootState, AppDispatch } from "../../app/store";

export type CartItems = { [id: string]: number };

interface CartState {
  items: CartItems;
  checkoutState: "LOADING" | "READY" | "ERROR";
  errorMessage: string;
}

const initialState: CartState = {
  items: {},
  checkoutState: "READY",
  errorMessage: "",
};

export const checkout = createAsyncThunk<
  api.CheckoutResponse,
  undefined,
  { state: RootState }
>("cart/checkout", async (arg, thunkAPI) => {
  const state = thunkAPI.getState();
  const response = await api.checkout(state.cart.items);
  return response;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      state.items[id] = quantity;
    },
    removeFromCart(state, action: PayloadAction<string>) {
      delete state.items[action.payload];
    },
    addToCart(state, action: PayloadAction<string>) {
      if (state.items[action.payload]) {
        state.items[action.payload]++;
      } else {
        state.items[action.payload] = 1;
      }
      state.checkoutState = "READY";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkout.pending, (state) => {
      state.checkoutState = "LOADING";
    });
    builder.addCase(
      checkout.fulfilled,
      (state, action: PayloadAction<{ success: boolean }>) => {
        if (action.payload.success) {
          state.items = {};
          state.checkoutState = "READY";
        } else {
          state.checkoutState = "ERROR";
        }
      }
    );
    builder.addCase(checkout.rejected, (state, action) => {
      state.checkoutState = "ERROR";
      state.errorMessage = action.error.message || "";
    });
  },
});

export const getTotal = (state: RootState) => {
  console.log("checking for totals");
  let total = 0;
  for (let id in state.cart.items) {
    total += state.cart.items[id];
  }
  return total;
};

export const getMemoizedTotal = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    console.log("checking for memoized totals");
    let total = 0;
    for (let id in items) {
      total += items[id];
    }
    return total;
  }
);

export const getTotalPrice = createSelector(
  (state: RootState) => state.cart.items,
  (state: RootState) => state.products.products,
  (items, products) => {
    let total = 0;
    for (let id in items) {
      total += products[id].price * items[id];
    }
    return total.toFixed(2);
  }
);

export const checkoutAction = () => checkoutThunk;
export async function checkoutThunk(
  dispatch: AppDispatch,
  getState: () => RootState
): Promise<void> {
  dispatch({ type: "cart/checkout/pending" });
  try {
    const state = getState();
    const payload = await api.checkout(state.cart.items);
    dispatch({ type: "cart/checkout/fulfilled", payload });
  } catch (error) {
    dispatch({ type: "cart/checkout/rejected", error });
  }
}

export const { updateQuantity, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
