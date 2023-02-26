import React, { useState } from "react";

export type MyContextValue = {
  handleCartAmountUpdate: () => void;
  CartAmount: number;
};

export const MyContext = React.createContext<MyContextValue>({
  handleCartAmountUpdate: () => {},
  CartAmount: 0,
});

export function MyProvider({ children }: { children: React.ReactNode }) {
  const [CartAmount, setCartAmount] = useState<number>(0);

  const handleCartAmountUpdate = () => {
    setCartAmount(CartAmount + 1);
  };

  return (
    <MyContext.Provider value={{ handleCartAmountUpdate, CartAmount }}>
      {children}
      hej
    </MyContext.Provider>
  );
}