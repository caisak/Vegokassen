import styled from "styled-components";
import { Carousel } from "../Components/Carousel";
import { RecipeCard, RecipeCardProps } from "../Components/DetailedRecipeCard";
import { ReviewCards } from "../Components/Review";
import { StyledRecipeCardsContainer } from "./Home";

const recipe1: RecipeCardProps = {
  title: "Rödbetspaj",
  tag: "Under 15 min",
  image: "src/Images/1recipe.jpeg",
  description: "med svarta oliver och fetaost",
  time: "15 MIN",
  tagBackgroundColor: "#ff8a48"
};

const recipe2: RecipeCardProps = {
  title: "Gräddig blomkålsgryta",
  tag: "Familjevänlig",
  image: "src/Images/2recipe.jpeg",
  description: "med ris",
  time: "30 MIN",
  tagBackgroundColor: "#68a75f"
};

const recipe3: RecipeCardProps = {
  title: "Vegogratäng",
  tag: "För dig som tränar",
  image: "src/Images/3recipe.jpeg",
  description: "med grönkål och soltorkade tomater",
  time: "25 MIN",
  tagBackgroundColor: "#ffe282"
};

const recipe4: RecipeCardProps = {
  title: "Bulgursallad",
  tag: "För dig som tränar",
  image: "src/Images/4recipe.jpeg",
  description: "med böngroddar",
  time: "60 MIN",
  tagBackgroundColor: "#ffe282"
};

const recipe5: RecipeCardProps = {
  title: "Currygryta",
  tag: "Under 15 min",
  image: "src/Images/5recipe.jpeg",
  description: "med bönor och ris",
  time: "15 MIN",
  tagBackgroundColor: "#ff8a48"
};

const recipe6: RecipeCardProps = {
  title: "Bönbiggar med majs och vitlösris",
  tag: "Familjevänlig",
  image: "src/Images/6recipe.jpeg",
  description: "med majs, jalapenos och vitlöksris",
  time: "50 MIN",
  tagBackgroundColor: "#68a75f"
};

export function Recipies() {
    return (
      <div>
        <Carousel
        height={35}
        images={[
          "src/Images/fruits_food.jpg",
          "src/Images/fruits_food_2.jpg",
          "src/Images/dessert_1.jpg",
        ]}
        titles={[
          "Massor av goda och inspirerande fruktrecept!",
          "Enkla, goda och miljövänliga fruktmåltider! ",
          "Problem att få i dig dina 15 frukter om dagen? Prova våra desserter!",
        ]}
        buttonText={[
          "Våra fruktkassar",
          "Jag älskar blåbär!",
        ]}
        gradientColor={
          "tbc"
        }
      />
      <RecipeCardContainerBackground>
        <Test>
          <StyledRecipeCardsContainer>
            <RecipeCard {...recipe1} />
            <RecipeCard {...recipe2} />
            <RecipeCard {...recipe3} />
            <RecipeCard {...recipe4} />
            <RecipeCard {...recipe5} />
            <RecipeCard {...recipe6} />
          </StyledRecipeCardsContainer>
        </Test> 
      </RecipeCardContainerBackground>

      <ReviewCards></ReviewCards>
      </div>
    )
  }

const RecipeCardContainerBackground = styled.div`
  background-color: #fff8ea;
  
`
const Test = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  
`