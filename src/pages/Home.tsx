import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHandPeace } from "@fortawesome/free-regular-svg-icons";
import { faCoffee, faSpinner, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { AddToCartButton } from "../Components/AddToCartButton";
import { Button, MyButton } from "../Components/Button";
import styled from "styled-components";
import { OrderButton } from "../Components/OrderButton";
import { PromotionAd } from "../Components/PromotionAd";

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
      </p>
      <Link to="cart">
        <MyButton>
        To cart page!
        </MyButton></Link>
    </div>
      <OrderButton text="Beställ" />
    </StyledDiv>
  );
}


const StyledDiv = styled.div `
background-color:orange;

`
const H = styled.h1 `
margin:0;`
