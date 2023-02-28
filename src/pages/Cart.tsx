import { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../CartContex";
import { MyButton } from "../Components/Button";

type CartItem = {
  name: string;
  image: string;
  price: number;
};

type CartItemsMap = {
  [name: string]: {
    item: CartItem;
    quantity: number;
  };
};

export function Cart() {
  const { cartList, clearCart } = useContext(CartContext);
  const [ordered, setOrdered] = useState(false); // added state for order status


  const cartItemsMap = cartList.reduce<CartItemsMap>((itemsMap, item) => {
    const existingItem = itemsMap[item.name];
    if (existingItem) {
      existingItem.quantity++;
    } else {
      itemsMap[item.name] = { item, quantity: 1 };
    }
    return itemsMap;
  }, {});

  const cartItems = Object.values(cartItemsMap);

  const total = cartItems.reduce((total, { item, quantity }) => {
    return total + item.price * quantity;
  }, 0);

  if (cartList.length == 0 && ordered) {
    return <h1>Thanks for your order!</h1>
  } else if (cartList.length == 0) {
    return <h1>Your cart is empty!</h1>;
  }
  
  return (
    <MyCart>
      <h1>Cart ({cartList.length} items) </h1>
      <CartTable>
        <thead style={{ borderBottom: "2px solid black" }}>
          <tr>
            <TableHeader style={{ textAlign: "left" }}>Item</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Total</TableHeader>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(({ item, quantity }) => (
            <TableRow
              key={item.name}
              style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}
            >
              <td>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "50px", height: "50px" }}
                />
                {item.name}
              </td>
              <TableCell>{item.price} kr</TableCell>
              <TableCell>{quantity}</TableCell>
              <TableCell>{item.price * quantity} kr</TableCell>
            </TableRow>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>Total: {total}</td>
          </tr>
        </tfoot>
      </CartTable>
      <MyButton onClick={() => clearCart()}>Clear Cart</MyButton>
      <MyButton onClick={() => {
        setOrdered(true);
        clearCart();
      }}>Order</MyButton>
    </MyCart>
  );
}

export const MyCart = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const CartTable = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin-top: 2rem;
`;

export const TableHeader = styled.th`
  text-align: center;
`;

export const TableRow = styled.tr`
  height: 4rem;
`;

export const TableCell = styled.td`
  text-align: center;
`;
