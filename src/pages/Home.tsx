import styled from "styled-components";
import { ApiComponent } from "../Components/ApiComponent";
import { Button } from "../Components/Button";
import { Carousel } from "../Components/Carousel";
import { HowCard } from "../Components/HowCard";
import { OrderButton } from "../Components/OrderButton";
import { PromotionAd } from "../Components/PromotionAd";
import { RecipeCard, RecipeCardProps } from "../Components/RecipeCard";
import { ReviewCards } from "../Components/Review";

export function Home() {
  const recipe1: RecipeCardProps = {
    title: "BLOMKÅLSPURÉ",
    image: "src/Images/recipe9.jpg",
    description: "Krämig blomkålspuré serverad med mandarin och körsbärstomat",
  };

  const recipe2: RecipeCardProps = {
    title: "KRÄMIG MOROTSSOPPA",
    image: "src/Images/recipe6.jpg",
    description: "Rustik och färgglad morotssoppa, en perfekt värmande soppa när det är lite kyligare ute",
  };

  const recipe3: RecipeCardProps = {
    title: "KLASSISKA UNGSBAKADE ROTFRUKTER",
    image: "src/Images/recipe7.jpg",
    description: "Potatisen, palsternackan och morötterna smakar ljuvligt gott av smakhöjare som salt, citron och färsk rosmarin",
    
  };

  const recipe4: RecipeCardProps = {
    title: "GRÖN ÄRTPURÉ MED GRANATÄPPLE",
    image: "src/Images/recipe8.jpg",
    description: "Knalligt grön ärtpuré med granatäpple. God som både birätt eller som pålägg",
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
          <StyledButton>
            <Button text ="Läs mer"/>
          </StyledButton>
          </StyledRecipeCardsWrapper>
        </StyledMain>
        <ReviewCards></ReviewCards>
        <ApiComponent></ApiComponent>

       
        
        <>
        <OrderButton text="Beställ" />
        </>
        
    </div>
  );
}

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

// Recipe container + slogan styling 
const StyledSloganWrapper = styled.div`
  padding: 50px;
`
const StyledSloganHeading = styled.p`
  color: #392E7C;
  text-align: center;
  font-size: 30px;
  font-family: "Titillium Web", sans-serif;
  font-weight: bold;
`

const StyledSloganHeadingSmall = styled.p`
  color: #392E7C;
  text-align: center;
  font-size: 25px;
  font-family: "Titillium Web", sans-serif;
`;

const StyledButton = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

// Recipe cards styling
const StyledRecipeCardsWrapper = styled.div`
  background-color: #fff8ea;
  padding-bottom: 50px;
`;

export const StyledRecipeCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  @media(max-width:850px){
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  margin-right: 0;
}

@media (min-width: 851px) and (max-width: 1000px) {
    display: flex;
    justify-content: space-between;
    margin-left: 100px;
    margin-right: 100px;
  }
`;