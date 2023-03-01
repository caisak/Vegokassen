import styled from "styled-components";
import { OrderHereButton } from "./Button";

interface Props {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
}

export function BigHowCard(props: Props) {
  return (
    <StyledBigDivContainer>
      <StyledBigImg src={props.imageSrc} alt={props.imageAlt} />
      <StyledBigDiv>
        <StyledBigHeader>{props.title}</StyledBigHeader>
        <StyledBigText>{props.text}</StyledBigText>
        <OrderHereButton
        text="Beställ här"
        />
      </StyledBigDiv>
    </StyledBigDivContainer>
  );
}

const StyledBigDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: 'Titillium Web', sans-serif;
  background-color: #fff8ea;
  height: 50vh;
  width: 80%;
  margin: auto;

  @media(max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledBigDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;


const StyledBigImg = styled.img`
object-fit: cover;
border-radius: 50%;
height: 20rem;
width: 20rem;
`;

const StyledBigHeader = styled.h2``;

const StyledBigText = styled.p`
text-align: center;
margin: 1rem;
`;

