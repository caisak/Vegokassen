import { createContext, useState } from "react";
import { Product } from "./Products.data";

interface CartContextProps {
  cartList: Product[];
  setCartList: React.Dispatch<React.SetStateAction<Product[]>>;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
  cartList: [],
  setCartList: () => {},
  clearCart: () => {},
});

export function CartProvider(props: { children: React.ReactNode }) {
  const [cartList, setCartList] = useState<Product[]>([]);

  const clearCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider value={{ cartList, setCartList, clearCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
