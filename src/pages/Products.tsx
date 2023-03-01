import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../CartContex";
import ProductsList, { Product } from "../Products.data";

export function Products() {
  const { cartList, setCartList } = useContext(CartContext);

  function handleAddToCart(product: Product) {
    setCartList((prevCartList) => [...prevCartList, product]);
  }

  return (
    <StyledProductContainer>
      {ProductsList.map((product) => (
        <div key={product.image}>
          <StyledProductDiv>
            <StyledProductHeader>{product.name}</StyledProductHeader>
            <StyledProductImage src={product.image} alt={product.name} />
            <StyledProductText>{product.description}</StyledProductText>
            <p>{product.price} kr</p>
            <StyledPutInCartButton onClick={() => handleAddToCart(product)}>
              Lägg till i kundvagn
            </StyledPutInCartButton>
          </StyledProductDiv>
        </div>
      ))}
    </StyledProductContainer>
  );
}

const StyledProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
  margin: 1rem;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;


  }
`;

const StyledProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  height: 80vh;
  width: 20rem;
  box-shadow: 0 0 10px #c0c0c0;
  background-color: #ffff;
  font-family: "Titillium Web", sans-serif;
  margin: auto;
`;

const StyledProductHeader = styled.h2`
  margin: 0.5rem;
`;

const StyledProductImage = styled.img`
  object-fit: cover;
  height: 20rem;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const StyledProductText = styled.p`
  margin: 0.5rem;
  text-align: center;
`;

const StyledPutInCartButton = styled.button`
  width: 95%;
  height: 2rem;
  background-color: pink;
  border-radius: 0.5rem;
  border: none;
  margin-top: 2rem;

  &:hover {
    background-color: #c79eb6;
  }

  &:active {
    transform: scale(0.99);
    box-shadow: 0 0 5px black;
  }
`;
