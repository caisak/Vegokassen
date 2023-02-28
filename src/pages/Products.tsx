

import { Link } from "react-router-dom";
import { AddToCartButton } from "../Components/AddToCartButton";
import { MyButton } from "../Components/Button";
import { ReviewCards } from "../Components/Reviews";



export function Products() {
  return (
    <div>
      <h1>This will be the Products page</h1>
      <Link to="../cart">
        <MyButton>
        To cart page!
        </MyButton></Link>
        <AddToCartButton />
        <ReviewCards></ReviewCards>
    </div>
  );
}
