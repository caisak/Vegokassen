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
    title: "SUMMER PEACH SALLAD",
    image: "./assets/recipe6.jpg",
    description: "A light and refreshing salad that highlights juicy, fresh peaches as the main ingredient.",
  };

  const recipe3: RecipeCardProps = {
    title: "SUMMER PEACH SALLAD",
    image: "./assets/recipe7.jpg",
    description: "A light and refreshing salad that highlights juicy, fresh peaches as the main ingredient.",
  };

  const recipe4: RecipeCardProps = {
    title: "SUMMER PEACH SALLAD",
    image: "./assets/recipe8.jpg",
    description: "A light and refreshing salad that highlights juicy, fresh peaches as the main ingredient.",
  };

  return (
    <div>
      <MyProvider>
        <Header />
        <main>
          <Outlet />
          <StyledRecipeCardsWrapper>
          <p>Mat som gör både dig och planeten glad</p>
          <p>Välj mellan 150+ olika måltider</p>
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

const StyledRecipeCardsWrapper = styled.div`
  background-color: #fff8ea;
`

const StyledRecipeCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
