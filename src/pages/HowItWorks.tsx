import { useState } from "react";
import styled from "styled-components";
import { BigHowCard } from "../Components/BigHowCard";
import { BigHowCardReversed } from "../Components/BigHowCardReversed";
import { Modal } from "../Components/Modal";

export function HowItWorks() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };
    return (
      
      <div>
        {showModal && <Modal onClose={closeModal} />}
        <BigHowCard
        title="Du beställer"
        text="Beställ enkelt den kasse som passar dig och din familj bäst. Du behöver inte oroa dig över inköpslistor eller köer i mataffären. "
        imageSrc="src/Images/order2.jpg"
        imageAlt="Person beställer på sin dator"
         />
        <BigHowCardReversed
        title="Vi plockar ihop de fraschaste ingredienserna"
        text="Vi klimatkompenserar er leverans och levererar inom en för oss rimlig tid. No complaints pls"
        imageSrc="src/Images/bellpeppers.jpg"
        imageAlt="Hand plockar paprika"
        />

        <BigHowCard 
        title="Vi levererar"
        text="Laga den hälsosamma maten som kommer med vår klimatkompenserade leverans"
        imageSrc="src/Images/grocery1.jpg"
        imageAlt="Matkasse med grönsaker"
        />

        <BigHowCardReversed
        title="Du lagar din mat"
        text="Laga din mat med dom basta vegetariska ingredienserna och lev ett langt och lyckligt liv tillsammans med planeten"
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
 