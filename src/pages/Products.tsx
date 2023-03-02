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
        text="Vegokassen är ett företag som erbjuder olika vegetariska matkassar som 
        passar både för vardagsmat och till festliga tillfällen. Våra matkassar innehåller 
        noga utvalda, färska och näringsrika grönsaker, baljväxter och kryddor som är ekologiskt 
        odlade och fria från animaliska produkter. Du kan välja mellan olika matkassar, som exempelvis familjekassen, eller fruktkassen.
        Oavsett vilken kasse du väljer kan du vara säker på att maten är både god och hälsosam"
        secondText="Utforska våra olika kassar nedan! Det finns någon för alla."
        image="src/Images/oranges.jpg"
        accentTextColor="#2e180e"
        textColor="#1c3529"
        gradient="rgba(255, 199, 96, 0.75)"
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
    padding: 0.2rem;
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
  border-radius: 0.3rem;
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
  background-color: #ff8a48;
  border-radius: 0.3rem;
  color: #1d3218;
  border: none;
  font-weight: bold;
  margin-bottom: 0.5rem;

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
