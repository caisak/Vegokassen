import styled from "styled-components";
import { Carousel } from "../Components/Carousel";
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
    <div>
       <PromotionAd text="Begränstat erbjudande! Gratis frakt och 20% rabatt om du beställer inom
        19:00" onClose={() => console.log("Ad closed")} />
      <StyledMain>
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
<StyledCardDiv>
        <HowCard
            numberProps="1"
            imgSrc="src/Images/order1.jpg"
            h2Props="Du beställer"
            text="Beställ enkelt på vår hemsida."
            altProps="Person beställer på laptop"
        />
        <HowCard 
          numberProps="2"
          imgSrc="src/Images/deliver1.jpg"
          h2Props="Vi levererar"
          text="Våra leveranser är klimatkompenserade och vi levererar bara den mängd som behövs för att minska matsvinn!"
          altProps="Lastbil kör över bro"
        />
        <HowCard 
          numberProps="3"
          imgSrc="src/Images/cooking_3.jpg"
          h2Props="Ni äter god mat"
          text="Följ våra recept och njut av god vegetarisk mat anpassad efter din familj."
          altProps="Ett par lagar mat"
        />
        </StyledCardDiv>
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
        </StyledMain>
        <OrderButton text="Beställ" />

        <StyledFillerCard>
          <StyledFillerText>Genom att välja vegetariskt kan du bidra till att skydda vår planet och dess resurser.</StyledFillerText>
          <StyledFillerImg src="src/Images/farm.jpeg" alt="" />
        </StyledFillerCard>
    </div>
  );
}

// Styling 
const StyledMain = styled.main `
margin: 0;

`
const H = styled.h1 `
margin:0;`

const StyledCardDiv = styled.div `
width: 100%;
display: grid;
gap: 0.5rem;
grid-template-columns: repeat(3, 1fr);
@media(max-width:768px){
  grid-template-columns: 1fr;
  margin-left:.1rem;
  margin-right:.1rem;
}
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

// Filler cards styling 
const StyledFillerCard = styled.div`
  position: relative;
  margin: 2rem auto;
  width: 100%;
  max-width: 1100px;
`;

const StyledFillerImg = styled.img`
  display: block;
  width: 80%; 
  height: auto;
  margin: 0 auto;
`;

const StyledFillerText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* z-index: 1; */
  font-size: 25px;
  color: #fff;
  text-align: center;
`