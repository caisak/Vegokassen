import styled from "styled-components";

interface Props {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
}

export function BigHowCardReversed(props: Props) {
  return (
    <StyledBigDivContainer>
      <StyledBigDiv>
        <StyledBigHeader>{props.title}</StyledBigHeader>
        <StyledBigText>{props.text}</StyledBigText>
      </StyledBigDiv>
      <StyledBigImg src={props.imageSrc} alt={props.imageAlt} />
    </StyledBigDivContainer>
  );
}

const StyledBigDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-family: 'Titillium Web', sans-serif;
  background-color: #FFF;
  height: 50vh;
  width: 80%;
  margin: auto;
`;

const StyledBigDiv = styled.div`
display: flex;
flex-direction: column;
`;


const StyledBigImg = styled.img`
object-fit: cover;
border-radius: 50%;
height: 15rem;
width: 15rem;
`;

const StyledBigHeader = styled.h2``;

const StyledBigText = styled.p``;
