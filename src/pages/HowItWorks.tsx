import { BigHowCard } from "../Components/BigHowCard";
import { BigHowCardReversed } from "../Components/BigHowCardReversed";
import { ReviewCards } from "../Components/Review";

export function HowItWorks() {
    return (
      <div>
        <BigHowCard
        title="Du beställer"
        text="Du beställer enkelt hemifrån vad du vill ha eller inte ha "
        imageSrc="src/Images/order2.jpg"
        imageAlt="Person beställer på sin dator"
         />
        <BigHowCardReversed
        title="Vi levererar"
        text="Vi klimatkompenserar er leverans och levererar inom en för oss rimlig tid. No complaints pls"
        imageSrc="src/Images/deliver1.jpg"
        imageAlt="" />

        <BigHowCard 
        title="Du lagar din mat"
        text="Laga den hälsosamma maten som kommer med vår klimatkompenserade leverans"
        imageSrc="src/Images/fresh_greens2.jpg"
        imageAlt=""
        />
        <ReviewCards></ReviewCards>
      </div>
    )
  }
  