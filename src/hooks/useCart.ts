import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addToCart, removeFromCart } from "../redux/cartSlice";

export const useCart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  const add = (id: string, amount: number) => {
    dispatch(addToCart({ id, amount }));
  };

  const remove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return { cart, add, remove };
};
