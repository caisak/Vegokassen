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
        <OrderHereButton text="Beställ här" />
      </StyledBigDiv>
    </StyledBigDivContainer>
  );
}

const StyledBigDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: "Titillium Web", sans-serif;
  background-color: #fff8ea;
  color: #142613;
  height: auto;
  width: 80%;
  margin: auto;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
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
  aspect-ratio: 1;
  border-radius: 50%;
  height: 20rem;
  width: 20rem;
  margin: 1rem;
  @media (max-width: 768px) {
    height: 8rem;
    width: 8rem;
  }
`;

const StyledBigHeader = styled.h2``;

const StyledBigText = styled.p`
  text-align: center;
  margin: 1rem;
`;
