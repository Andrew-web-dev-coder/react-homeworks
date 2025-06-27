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
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, action: PayloadAction<string>) {
      delete state.cart[action.payload];
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    },
    resetCart(state) {
      state.cart = {};
      sessionStorage.removeItem("cart");
    }
  }
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;