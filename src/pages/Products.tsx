import { useContext } from "react";
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
      <StyledRecipeCardsContainer>
        {ProductsList.map((product) => (
          <StyledRecipeCardDiv key={product.image}>
            <StyledRecipeCardWrapper>
            <h2>{product.name}</h2>
            <StyledRecipeCardImage src={product.image} alt={product.name} />
            <p>{product.price} kr</p>
            <p>{product.description}</p>
            <button onClick={() => handleAddToCart(product)}>Add to cart</button>
            </StyledRecipeCardWrapper>
          </StyledRecipeCardDiv>
      ))}
      </StyledRecipeCardsContainer>
      );
    }
    

