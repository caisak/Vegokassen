import { Carousel } from "../Components/Carousel";

export function Products() {
  return (
    <div>
      <Carousel
        height={55}
        images={[
          "src/Images/food_10.jpg",
          "src/Images/food_7.jpg",
          "src/Images/food_2.jpg",
        ]}
        titles={[
          "Vi gör vegetarisk matlagning enkelt och inspirerande!",
          "Enkla, goda och miljövänliga recept!",
          "Varje grön dag är en bra dag! Börja din idag!",
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
  );
}
