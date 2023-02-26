import { useContext } from "react";
import { MyButton } from "./Button";
import { MyContext, MyContextValue } from "./MyProvider";

export function AddToCartButton() {
  const { handleCartAmountUpdate } = useContext<MyContextValue>(MyContext);

  return (
    <div>
      <MyButton onClick={handleCartAmountUpdate}>Add to Cart</MyButton>
    </div>
  );
}



