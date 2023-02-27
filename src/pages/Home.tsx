import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHandPeace } from "@fortawesome/free-regular-svg-icons";
import { faCoffee, faSpinner, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AddToCartButton } from "../Components/AddToCartButton";
import { Button, MyButton } from "../Components/Button";
import { OrderButton } from "../Components/OrderButton";
import { PromotionAd } from "../Components/PromotionAd";
import { RecipeCard, RecipeCardProps } from "../Components/RecipeCard";

export function Home() {
  const recipe1: RecipeCardProps = {
    title: "SOMMARPERSIKOSALLAD",
    image: "src/Images/recipe9.jpg",
    description: "A light and refreshing salad that highlights juicy, fresh peaches as the main ingredient.",
  };

  const recipe2: RecipeCardProps = {
    title: "KRÄMIG MOROTSSOPPA",
    image: "src/Images/recipe6.jpg",
    description: "Made with tender, oven-roasted carrots, blended to perfection with savory spices and a touch of cream.",
  };

  const recipe3: RecipeCardProps = {
    title: "KLASSISKT UNGSBAKADE ROTFRUKTER",
    image: "src/Images/recipe7.jpg",
    description: "A hearty dish featuring a medley of earthy and flavorful vegetables, such as beets, parsnips, and sweet potatoes.",
  };

  const recipe4: RecipeCardProps = {
    title: "MYNTA-TÉ PURÉE MED GRANATÄPPLE",
    image: "src/Images/recipe8.jpg",
    description: "A refreshing minted tea purée with pomegranate. A blend that offers a smooth texture and a fruity flavor.",
  };
  
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
      <OrderButton text="Beställ" />

      <main>
          <StyledRecipeCardsWrapper>
            <StyledSloganWrapper> 
              <StyledSloganHeading>Mat som gör både dig och planeten glad</StyledSloganHeading>
              <StyledSloganHeadingSmall>Välj mellan 150+ olika måltider</StyledSloganHeadingSmall>
            </StyledSloganWrapper>
          <StyledRecipeCardsContainer>
            <RecipeCard {...recipe1} />
            <RecipeCard {...recipe2} />
            <RecipeCard {...recipe3} />
            <RecipeCard {...recipe4} />
          </StyledRecipeCardsContainer>
          </StyledRecipeCardsWrapper>
        </main>

    </StyledDiv>
  );
}

const StyledDiv = styled.div `
background-color:orange;

`
const H = styled.h1 `
margin:0;`

// Recipe cards styling
const StyledSloganWrapper = styled.div`
  padding: 30px;
`
const StyledSloganHeading = styled.p`
  color: #392E7C;
  text-align: center;
  font-size: 30px;
  font-family: 'Rasa', serif;
  font-weight: bold;
`

const StyledSloganHeadingSmall = styled.p`
  color: #392E7C;
  text-align: center;
  font-size: 25px;
  font-family: 'Rasa', serif;
`

const StyledRecipeCardsWrapper = styled.div`
  background-color: #fff8ea;
`

const StyledRecipeCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
