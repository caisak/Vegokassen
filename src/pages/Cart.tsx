import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../CartContex";

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
    return <EmptyCart>Tack för din beställning!</EmptyCart>;
  } else if (cartList.length == 0) {
    return (
    <EmptyCart>
      Din kundvagn är tom!<br/>
      <Link to="../produkter"> Kolla in våra kassar!</Link>
      </EmptyCart>);
  }

  return (
    <MyCart>
      <CartHeader>
        <h1>Kundvagn ({cartList.length} artiklar) </h1>
        <ClearCartButton onClick={() => clearCart()}>
          Töm kundvagn
        </ClearCartButton>
      </CartHeader>
      <CartTable>
        <thead style={{ borderBottom: "2px solid black" }}>
          <tr>
            <ItemHeader>Artikel</ItemHeader>
            <TableHeader style={{ paddingRight: "14px" }}>Pris</TableHeader>
            <TableHeader>Antal</TableHeader>
            <TableHeader style={{ paddingRight: "14px" }}>Total</TableHeader>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(({ item, quantity }) => (
            <TableRow
              key={item.name}
              style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}
              >
                <FlexCell>
                  <FirstCell>
                    <ItemImage
                      src={item.image}
                      alt={item.name}
                      />
                  </FirstCell>
                  <FirstCell style={{marginLeft: "10px"}}>{item.name}</FirstCell>
                </FlexCell>
              <TableCell>{item.price} kr</TableCell>
              <TableCell>{quantity}</TableCell>
              <TableCell>{item.price * quantity} kr</TableCell>
            </TableRow>
          ))}
        </tbody>
      </CartTable>
      <OrderDiv>
        <h1>Totalt: <span style={{whiteSpace: "nowrap"}}>{total} kr</span></h1>
        <CheckoutButton
          onClick={() => {
            setOrdered(true);
            clearCart();
          }}
        >
          Beställ!
        </CheckoutButton>
      </OrderDiv>
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
  margin-top: 4rem;
  font-family: "Titillium Web", sans-serif;
`;

export const CartHeader = styled.div`
  display: flex;
  column-gap: 20px;
  width: 80%;
  justify-content: space-between;

  @media (max-width: 650px) {
    font-size: 0.8rem;
    }

    @media (max-width: 370px) {
      width: 85%;
      }

`;

export const ClearCartButton = styled.button`
  border: none;
  font-size: 1.4rem;
  color: red;
  text-decoration: underline;
  background-color: inherit;
  cursor: pointer;
  margin-right: 10px;
  font-family: "Titillium Web", sans-serif;
`;

export const CartTable = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  font-size: 1.4rem;
  border-bottom: 2px solid black;

  @media (max-width: 650px) {
    font-size: 1.15rem;
    }

`;

export const ItemHeader = styled.th`
text-align: left; 
width: 50%;

@media (max-width: 650px) {
  width: 40%;
  }
`
export const TableHeader = styled.th`
  text-align: center;
  width: auto;

  @media (max-width: 650px) {
  padding-right: 0;
  }

`;

export const TableRow = styled.tr`
  height: 4.5rem;
`;

export const FlexCell = styled.td`
display: flex;
align-items: center;
width: 100%;
margin-right: auto;

@media (max-width: 650px) {
flex-wrap: wrap;
justify-content: center;
flex-direction: column-reverse;
align-items: flex-start;
}
`;

export const FirstCell = styled.span`
  display: inline-block;
  vertical-align: middle;

  @media (max-width: 650px) {
    margin-left: 0!important;
  }
`;

export const ItemImage = styled.img`
width: 75px;
height: 75px;
vertical-align: middle;
margin: 4px 0 4px 0;

@media (max-width: 650px) {
  width: 55px;
  height: 55px;
}

`
export const TableCell = styled.td`
  text-align: center;
  width: auto;
  margin-right: auto;
`;

export const OrderDiv = styled.div`
display: flex;
column-gap: 20px;
width: 80%;
justify-content: space-between;
text-align: center;
align-items: center;
font-size: .9rem;

@media (max-width: 650px) {
  font-size: 0.8rem;
  }

`
export const CheckoutButton = styled.button`
border-radius: 99px;
font-size: 1.4rem;
width: 200px;
background-color: #AACCF8;
border: none;
font-weight: bold;
cursor: pointer;
font-family: "Titillium Web", sans-serif;
height: 40px;
`
export const EmptyCart = styled.div`
font-size: 2.5rem;
font-weight: bold;
font-family: "Titillium Web", sans-serif;
text-align: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 0;
}
`