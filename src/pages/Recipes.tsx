import styled from "styled-components";
import { Carousel } from "../Components/Carousel";
import { CustomRecipeCard, CustomRecipeCardProps } from "../Components/CustomRecipeCard";
import { ReviewCards } from "../Components/Review";
import { StyledRecipeCardsContainer } from "./Home";

const recipe1: CustomRecipeCardProps = {
  title: "Rödbetspaj",
  tag: "Under 15 min",
  image: "src/Images/1recipe.jpeg",
  description: "med svarta oliver och fetaost",
  time: "15 MIN",
  tagBackgroundColor: "#ff8a48"
};

const recipe2: CustomRecipeCardProps = {
  title: "Gräddig blomkålsgryta",
  tag: "Familjevänlig",
  image: "src/Images/2recipe.jpeg",
  description: "med ris",
  time: "30 MIN",
  tagBackgroundColor: "#68a75f"
};

const recipe3: CustomRecipeCardProps = {
  title: "Vegogratäng",
  tag: "För dig som tränar",
  image: "src/Images/3recipe.jpeg",
  description: "med grönkål och soltorkade tomater",
  time: "25 MIN",
  tagBackgroundColor: "#ffe282"
};

const recipe4: CustomRecipeCardProps = {
  title: "Bulgursallad",
  tag: "För dig som tränar",
  image: "src/Images/4recipe.jpeg",
  description: "med böngroddar",
  time: "60 MIN",
  tagBackgroundColor: "#ffe282"
};

const recipe5: CustomRecipeCardProps = {
  title: "Currygryta",
  tag: "Under 15 min",
  image: "src/Images/5recipe.jpeg",
  description: "med bönor och ris",
  time: "15 MIN",
  tagBackgroundColor: "#ff8a48"
};

const recipe6: CustomRecipeCardProps = {
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
        buttonText={["Våra fruktkassar", "Jag älskar blåbär!"]}
        gradientColor={"tbc"}
      />
      <RecipeCardContainerBackground>
        <Test>
          <StyledRecipeCardsContainer>
            <CustomRecipeCard {...recipe1} />
            <CustomRecipeCard {...recipe2} />
            <CustomRecipeCard {...recipe3} />
            <CustomRecipeCard {...recipe4} />
            <CustomRecipeCard {...recipe5} />
            <CustomRecipeCard {...recipe6} />
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