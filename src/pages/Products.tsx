import { Carousel } from "../Components/Carousel";

export function Products() {
  return (
    <div>
      <Carousel height={50} images={["src/Images/food_1.jpg","src/Images/food_2.jpg"]} />
    </div>
  )
}
