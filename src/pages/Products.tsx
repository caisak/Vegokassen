import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../CartContex";
import { Showcase } from "../Components/Showcase";
import ProductsList, { Product } from "../Products.data";

export function Products() {
  const { cartList, setCartList } = useContext(CartContext);

  function handleAddToCart(product: Product) {
    setCartList((prevCartList) => [...prevCartList, product]);
  }

  return (
    <div>
      <Showcase
        title="Våra kassar"
        text="Nedan finns info om våra utvalda matkassar med recept skapade för dig av våra kockar."
        secondText="Tack för att du väljer grönt"
        image="src/Images/oranges.jpg"
        accentTextColor="darkorange"
        textColor="#1c3529"
      ></Showcase>
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
    </div>
  );
}

const StyledProductContainer = styled.div`
  max-width: 69rem;
  display: grid;
  justify-self: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.9rem;
  margin: auto;
  margin-top: 2rem;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 1.6rem;
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  @media only screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 2rem 2rem;
    grid-gap: 1.5rem;
  }

`;

const StyledProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  height: 30rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 10px #c0c0c0;
  background-color: #4c7b45;
  font-family: "Titillium Web", sans-serif;
  margin: auto;
  color: white;
  @media only screen and (max-width: 1200px) {
    width: 94%;

  }

  @media only screen and (max-width: 900px) {
    width: 100%;
   
  }
  @media only screen and (max-width: 550px) {
    height: 25rem;
    padding:.2rem;
  }
`;

const StyledProductHeader = styled.h2`
  margin: 0.5rem;
`;

const StyledProductImage = styled.img`
  object-fit: cover;
  height: 40%;
  width: 93%;
  margin-bottom: 0.5rem;
  border-radius: .3rem;
  @media only screen and (max-width: 1200px) {
    width: 90%;
  }
  @media only screen and (max-width: 900px) {
    width: 80%;
  }
  @media only screen and (max-width: 550px) {
    height: 45%;
  }
`;

const StyledProductText = styled.p`
  margin: 0.5rem;
  text-align: center;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

const StyledPutInCartButton = styled.button`
  width: 95%;
  height: 2rem;
  background-color: #FF8A48;
  border-radius: 0.3rem;
  color: #1d3218;
  border: none;
  font-weight: bold;
  margin-bottom: .5rem;
  

  &:hover {
    background-color: #e2712f;
    color: white;
  }

  &:active {
    transform: scale(0.99);
    box-shadow: 0 0 5px black;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

