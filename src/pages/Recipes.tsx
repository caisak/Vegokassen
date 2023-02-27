import { Carousel } from "../Components/Carousel";

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
          "Våra Kassar",
          "Så funkar det!",
        ]}
        gradientColor={
          "tbc"
        }
      />
      </div>
    )
  }
  