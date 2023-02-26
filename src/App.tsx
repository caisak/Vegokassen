import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { MyProvider } from "./Components/MyProvider";
import { RecipeCard, RecipeCardProps } from "./Components/RecipeCard";

export function App() {
  const recipe1: RecipeCardProps = {
    title: "",
    image: "",
    description: "",
  };

  const recipe2: RecipeCardProps = {
    title: "",
    image: "",
    description: "",
  };

  const recipe3: RecipeCardProps = {
    title: "",
    image: "",
    description: "",
  };

  return (
    <div>
      <MyProvider>
        <Header />
        <main>
          <Outlet />
          <div>
            <RecipeCard {...recipe1} />
            <RecipeCard {...recipe2} />
            <RecipeCard {...recipe3} />
          </div>
        </main>
        <Footer />
      </MyProvider>
    </div>
  );
}
