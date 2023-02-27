import styled from "styled-components";
import { HowCard } from "../Components/HowCard";
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
        <StyledCardDiv>
<HowCard
            numberProps="1"
            imgSrc="src/Images/order1.jpg"
            h2Props="Du beställer"
            text="Beställ enkelt på vår hemsida."
        />
        <HowCard 
          numberProps="2"
          imgSrc="src/Images/deliver1.jpg"
          h2Props="Vi levererar"
          text="Våra leveranser är klimatkompenserade och vi levererar bara den mängd som behövs för att minska matsvinn!"
        />
        <HowCard 
          numberProps="3"
          imgSrc="src/Images/cooking_3.jpg"
          h2Props="Ni äter god mat"
          text="Följ våra recept och njut av god vegetarisk mat anpassad efter din familj."
        />
        </StyledCardDiv>


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
        <OrderButton text="Beställ" />
    </StyledDiv>
  );
}

const StyledDiv = styled.div `
background-color:orange;

`
const H = styled.h1 `
margin:0;`

const StyledCardDiv = styled.div `
display: flex;
flex-direction: row;
`

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
