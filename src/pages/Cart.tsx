import { useContext, useState } from "react";
import styled from "styled-components";
import { MyButton } from "../Components/Button";
import { MyContext, MyContextValue } from "../Components/MyProvider";

type CartItem = {
  name: string;
  image: string;
  price: number;
  quantity: number;
};

const initialCartItems: CartItem[] = [
  {
    name: 'Item 1',
    image: 'src/Images/bag_1.jpg',
    price: 10,
    quantity: 1,
  },
  {
    name: 'Item 2',
    image: 'src/Images/bag_transparent.png',
    price: 15,
    quantity: 2,
  },
];

export function Cart() {
  const { CartAmount } = useContext<MyContextValue>(MyContext);
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const total = cartItems.reduce(
    (acc, { price, quantity }) => acc + price * quantity,
    0
  );

  return (
    <MyCart>
      <h1>Cart ({CartAmount} items) </h1>
      <CartTable>
      <thead style={{ borderBottom: '2px solid black' }}>
          <tr>
            <TableHeader>Item</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Total</TableHeader>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(({ name, image, price, quantity }, index) => (
            <TableRow key={index}
            style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}
            >
              
              <td>
                <img src={image} alt={name} 
                 style={{ width: '50px', height: '50px' }}
                />
                {name}
              </td>
              <td>{price}</td>
              <td>{quantity}</td>
              <td>{price * quantity}</td>
            </TableRow>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Total:</td>
            <td>{total}</td>
          </tr>
        </tfoot>
      </CartTable>
      <MyButton>
      Order!
    </MyButton>
    </MyCart>
  );
};

export const MyCart = styled.div `
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const CartTable = styled.table`
width: 80%;
border-collapse: collapse;
`

export const TableHeader = styled.th`
text-align: left;
`


export const TableRow = styled.tr `
height: 4rem;
`

export const CartItem = styled.div `
height: 20rem;
width: 80%;
display: flex;
border: 2px solid black;
`

