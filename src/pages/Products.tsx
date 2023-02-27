import { Carousel } from "../Components/Carousel";

export function Products() {
  return (
    <div>
      <Carousel images={["src/Images/food_1.jpg","src/Images/food_2.jpg"]}></Carousel>
       <img src="src/Images/bag_1.jpg" />
    </div>
  )
}
