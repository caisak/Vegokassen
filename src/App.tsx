import { Outlet } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { MyProvider } from "./Components/MyProvider";
import { RecipeCard, RecipeCardProps } from "./Components/RecipeCard";

export function App() {
  const recipe1: RecipeCardProps = {
    title: "RECIPE 1",
    image: "./assets/recipe1.jpg",
    description: "hej hej hej hej hej",
  };

  const recipe2: RecipeCardProps = {
    title: "RECIPE 2",
    image: "./assets/recipe2.jpeg",
    description: "hej hej hej hej hej",
  };

  const recipe3: RecipeCardProps = {
    title: "RECIPE 3",
    image: "./assets/recipe3.jpeg",
    description: "hej hej hej hej hej",
  };

  const recipe4: RecipeCardProps = {
    title: "RECIPE 4",
    image: "./assets/recipe4.jpg",
    description: "hej hej hej hej hej",
  };

  return (
    <div>
      <MyProvider>
        <Header />
        <main>
          <Outlet />
          <StyledRecipeCardsContainer>
            <RecipeCard {...recipe1} />
            <RecipeCard {...recipe2} />
            <RecipeCard {...recipe3} />
            <RecipeCard {...recipe4} />
          </StyledRecipeCardsContainer>
        </main>
        <Footer />
      </MyProvider>
    </div>
  );
}

const StyledRecipeCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
