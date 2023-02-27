import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHandPeace } from "@fortawesome/free-regular-svg-icons";
import { faCoffee, faSpinner, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddToCartButton } from "../components/AddToCartButton";
import { Button } from "../components/Button";
import { OrderButton } from "../components/OrderButton";
import { PromotionAd } from "../components/PromotionAd";


export function Home() {

  
  return (
    <StyledDiv>
      <PromotionAd text="Begränstat erbjudande! Gratis frakt och 20% rabatt om du beställer inom
        19:00" onClose={() => console.log("Ad closed")} />
      <H>This will be the home page</H>
      <Button />
      <AddToCartButton />
      Your <FontAwesomeIcon icon={faCoffee} /> is hot and ready!
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faFacebook} size="lg" color="blue" spin />
      <p>
        We deliver all over Sweden! (excluding Halland)
        <FontAwesomeIcon icon={faTruck} bounce flip="horizontal" size="2x" color="green"/>
        Check it out Now! <FontAwesomeIcon icon={faHandPeace} size="2x" color="red" shake border/>
        spinPulse <FontAwesomeIcon icon={faSpinner} spinPulse/>
      <OrderButton text="Beställ" />
    </div>
    </StyledDiv>
  );
}


const StyledDiv = styled.div `
background-color:orange;

`
const H = styled.h1 `
margin:0;`
