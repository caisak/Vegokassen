
import { Carousel } from "../Components/Carousel";

import { Link } from "react-router-dom";
import { AddToCartButton } from "../Components/AddToCartButton";
import { MyButton } from "../Components/Button";


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
      <h1>This will be the Products page</h1>
      <Link to="../cart">
        <MyButton>
        To cart page!
        </MyButton></Link>
        <AddToCartButton />
    </div>
  );
}
