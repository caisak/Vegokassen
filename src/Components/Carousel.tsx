import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  images: string[];
  height: number;
}

export function Carousel(props: Props) {

  const { images, height } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  return (
    <Container images={images} height={height}>
      <ButtonWrapper>
        <FontAwesomeIcon onClick={handlePrevClick} icon={faChevronLeft} />
        <FontAwesomeIcon  onClick={handleNextClick} icon={faChevronRight}/>
      </ButtonWrapper>
      <ContentWrapper>
        <InfoBox>
          <Title>Vi gör vegetarisk matlagning enkelt och inspirerande!</Title>
          <ButtonBox>
            <MainWhiteButton>Våra Kassar</MainWhiteButton>
            <MainButton>Så funkar det!</MainButton>
          </ButtonBox>
        </InfoBox>
      </ContentWrapper>
      <Image src={images[currentIndex]} alt="Carousel Image" />
    </Container>
  );
}

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

const Container = styled.div<Props>`
  height: ${(props) => `${props.height}vh`};
  width: 100%;
  position: relative;
  @media (max-width: 700px) {
    height: ${(props) => `${props.height - 10}vh`};
  }
`;

const ButtonWrapper = styled.div`
z-index: 300;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;

  & > * {
    /* Apply styles to all direct children */
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    background-color: rgba(0, 31, 14, 0.3);;
    border-radius: 50%;
    aspect-ratio: 1;
    padding: .3rem .3rem;
  }
`;
const ContentWrapper = styled.div`
  z-index: 200;
  position: relative;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, rgba(17, 40, 24, 0.85), transparent);
`;

const InfoBox = styled.div `
  display: flex;
  flex-direction: column;
  margin:0;
  position: absolute;
  top: 68%;
  left: 7%;
  font-family: "Titillium Web", sans-serif;
`
const Title = styled.h2 `
  color: white;
`

const ButtonBox = styled.div `
display: flex;
width: 100%;
flex-direction: row;
justify-content: flex-start;
`

const MainButton = styled.button `
  border-radius: .2rem;
  font-weight: 500;
  width: 30%;
  margin-right: 5%;
  background-color: #F8E1A6;
  border: none;
  font-family: "Titillium Web", sans-serif;
  color: #105434;
  transition: 0.2s;
  &:hover {
    background-color: #c5b281;
  }  
  &:active {
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
  }
  
`
const MainWhiteButton = styled.button `
  border-radius: .2rem;
  font-weight: 500;
  width: 30%;
  margin-right: 5%;
  background-color: #ffffff;
  border: none;
  font-family: "Titillium Web", sans-serif;
  color: #105434;
  transition: 0.2s;
  &:hover {
    background-color: #cfcfcf;
  }  
  &:active {
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
  }
`



