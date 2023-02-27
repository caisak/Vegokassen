import { Outlet } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { MyProvider } from "./Components/MyProvider";
import { RecipeCard, RecipeCardProps } from "./Components/RecipeCard";

export function App() {
  const recipe1: RecipeCardProps = {
    title: "SUMMER PEACH SALLAD",
    image: "./assets/recipe9.jpg",
    description: "A light and refreshing salad that highlights juicy, fresh peaches as the main ingredient.",
  };

  const recipe2: RecipeCardProps = {
    title: "CREAMY ROASTED CARROT SOUP",
    image: "./assets/recipe6.jpg",
    description: "Made with tender, oven-roasted carrots, blended to perfection with savory spices and a touch of cream.",
  };

  const recipe3: RecipeCardProps = {
    title: "CLASSIC ROASTED ROOT VEGETABLES",
    image: "./assets/recipe7.jpg",
    description: "A hearty dish featuring a medley of earthy and flavorful vegetables, such as beets, parsnips, and sweet potatoes.",
  };

  const recipe4: RecipeCardProps = {
    title: "MINTED TEA PURÉE WITH POMEGRANATE",
    image: "./assets/recipe8.jpg",
    description: "A refreshing minted tea purée with pomegranate. A blend that offers a smooth texture and a fruity flavor.",
  };

  return (
    <div>
      <MyProvider>
        <Header />
        <main>
          <Outlet />
          <StyledRecipeCardsWrapper>
            <StyledSloganWrapper> 
              <StyledSloganHeading>Mat som gör både dig och planeten glad</StyledSloganHeading>
              <StyledSloganHeadingSmall>Välj mellan 150+ olika måltider</StyledSloganHeadingSmall>
            </StyledSloganWrapper>
          <StyledRecipeCardsContainer>
            <RecipeCard {...recipe1} />
            <RecipeCard {...recipe2} />
            <RecipeCard {...recipe3} />
            <RecipeCard {...recipe4} />
          </StyledRecipeCardsContainer>
          </StyledRecipeCardsWrapper>
        </main>
        <Footer />
      </MyProvider>
    </div>
  );
}

const StyledSloganWrapper = styled.div`
  padding: 40px;
`
const StyledSloganHeading = styled.p`
  color: #392E7C;
  text-align: center;
  font-size: 30px;
  font-family: 'Rasa', serif;
  font-weight: bold;
`

const StyledSloganHeadingSmall = styled.p`
  color: #392E7C;
  text-align: center;
  font-size: 25px;
  font-family: 'Rasa', serif;
`

const StyledRecipeCardsWrapper = styled.div`
  background-color: #fff8ea;
`

const StyledRecipeCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
