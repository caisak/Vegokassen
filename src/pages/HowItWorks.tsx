import { useState } from "react";
import styled from "styled-components";
import { BigHowCard } from "../Components/BigHowCard";
import { BigHowCardReversed } from "../Components/BigHowCardReversed";
import { Modal } from "../Components/Modal";
import { Showcase } from "../Components/Showcase";

export function HowItWorks() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };
    return (
      
      <div>
        <Showcase
        title="Så här funkar det"
        text="Undrar du vad som händer när du beställer en matkasse från oss? Fortsätt läs!"
        secondText="aodhsahdhw"
        image="src/Images/dippingsauce.jpg"
        accentTextColor="darkorange"
        textColor="#1c3529"
      ></Showcase>
        {showModal && <Modal onClose={closeModal} />}
        <BigHowCard
        title="Beställ var som helst, när som helst"
        text="Skippa långa köer i mataffären och borttappade inköpslistor. Välj i lugn och ro bland våra matkassar och hitta den som är rätt för ditt liv och din familj. Beställ var som helst, när som helst."
        imageSrc="src/Images/order2.jpg"
        imageAlt="Person beställer på sin dator"
         />
        <BigHowCardReversed
        title="Vi handplockar de bästa ingredienserna"
        text="Vi väljer varsamt ut råvarorna till din matkasse. Vi skickar bara med så mycket som behövs för att minska matsvinnet. Bra för planeten och bra för plånboken."
        imageSrc="src/Images/bellpeppers.jpg"
        imageAlt="Hand plockar paprika"
        />

        <BigHowCard 
        title="Vi levererar"
        text="Våra leveranser är så klart klimatkompenserade och vi jobbar ständigt för att minska våra utsläpp och värnar om ekologisk hållbarhet och de globala målen."
        imageSrc="src/Images/grocery1.jpg"
        imageAlt="Matkasse med grönsaker"
        />

        <BigHowCardReversed
        title="Laga med kärlek"
        text="Njut av mat som är god både för dig och planeten! Följa våra roliga och enkla recept eller laga på ditt eget sätt. Vad väntar du på? Testa Vegokassen idag!"
        imageSrc="src/Images/fresh_greens2.jpg"
        imageAlt="Grönsaker"
        />
         <StyledFillerCard>
          <StyledFillerText>Genom att välja vegetariskt kan du bidra till att skydda vår planet och dess resurser</StyledFillerText>
          <StyledFillerImg src="src/Images/farm.jpeg" alt="Närbild på växter" />
        </StyledFillerCard>
      </div>
    )
  }


  // Filler cards styling 
const StyledFillerCard = styled.div`
position: relative;
width: 100%;
`;

const StyledFillerImg = styled.img`
display: block;
width: 100%; 
filter: blur(1px);
/* height: auto; */
margin: 0 auto;
height: 25rem;
object-fit: cover;
`;

const StyledFillerText = styled.p`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 1;
font-size: 25px;
color: #fff;
text-align: center;
font-family: "Titillium Web", sans-serif;
`;
 