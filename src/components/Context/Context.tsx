import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from "react";
export type Cart = Record<string, number>;

export interface CartContextType {
  cart: Cart;
  addToCart: (id: string, amount: number) => void;
  removeFromCart: (id: string) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart>(() => {
    const storedCart = sessionStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : {};
  });

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id: string, amount: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + amount,
    }));
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[id];
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
