import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../CartContex";
import { StyledRecipeCardDiv, StyledRecipeCardImage, StyledRecipeCardWrapper } from "../Components/RecipeCard";
import ProductsList, { Product } from "../Products.data";
import { StyledRecipeCardsContainer } from "./Home";

export function Products() {
  
  const { cartList, setCartList } = useContext(CartContext);

  function handleAddToCart(product: Product) {
    setCartList((prevCartList) => [...prevCartList, product]);
  }

  return (
      <StyledProductContainer>
        {ProductsList.map((product) => (
          <StyledDiv key={product.image}>
            <StyledProductWrapper>
            <StyledProductHeader>{product.name}</StyledProductHeader>
            <StyledProductImage src={product.image} alt={product.name} />
            <StyledProductText>{product.description}</StyledProductText>
            <p>{product.price} kr</p>
            <StyledPutInCartButton onClick={() => handleAddToCart(product)}>Lägg till i kundvagn</StyledPutInCartButton>
            </StyledProductWrapper>
          </StyledDiv>
      ))}
      </StyledProductContainer>
      );
    }
    
  /*
   align-items: center;
    height: 80vh;
    width: 28rem;
    box-shadow: 0 0 10px #c0c0c0;
    background-color: #ffff;
    margin: 1rem;
    border-radius: 0.5rem;
    font-family: "Titillium Web", sans-serif;
  */

    export const StyledProductWrapper = styled.div `
    display: flex;
    flex-direction: column; 
    width: 300px;
    background-color: white;
    box-shadow: 0px 4px 2px #dfd7d7;
    cursor: pointer;
  `;

    const StyledProductContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    @media(max-width:850px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
  }
  
  @media (min-width: 851px) and (max-width: 1000px) {
      display: flex;
      justify-content: space-between;
      margin-left: 100px;
      margin-right: 100px;
    }
  `;

export const StyledDiv = styled.div `
margin: 10px;
padding-bottom: 30px;
`;

    const StyledProductDiv = styled.div`
    margin: 1rem;
    border-radius: 0.5rem;
    height: 80vh;
    width: 28rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Titillium Web", sans-serif;
  `;
  
  const StyledProductHeader = styled.h2`
  margin: 0.5rem;
  `;
  
  const StyledProductImage = styled.img`
  object-fit: cover;
  height: 25rem;
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
  margin: 0.5rem;
  
  &:hover {
      background-color: #C79EB6;
  }
  
  &:active {
      transform: scale(0.99);
      box-shadow: 0 0 5px black;
  }
  `;

