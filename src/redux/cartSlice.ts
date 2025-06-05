import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Cart = Record<string, number>;

interface CartState {
  cart: Cart;
}

const getInitialCart = (): Cart => {
  const stored = sessionStorage.getItem("cart");
  return stored ? JSON.parse(stored) : {};
};

const initialState: CartState = {
  cart: getInitialCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ id: string; amount: number }>) {
      const { id, amount } = action.payload;
      state.cart[id] = (state.cart[id] || 0) + amount;
    },
    removeFromCart(state, action: PayloadAction<string>) {
      delete state.cart[action.payload];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
