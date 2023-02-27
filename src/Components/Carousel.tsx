import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  images: string[];
  height: number;
  titles:string[];
  buttonText:string[];
  gradientColor:string;
}

export function Carousel(props: Props) {

  const { images, height, titles, buttonText, gradientColor } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(0);

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);

    const newTitleIndex = currentTitle === 0 ? titles.length - 1 : currentTitle - 1;
    setCurrentTitle(newTitleIndex);
    console.log(currentTitle)
  };

  const handleNextClick = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    
    const newTitleIndex = currentTitle === titles.length - 1 ? 0 : currentTitle + 1;
    setCurrentTitle(newTitleIndex);

  };

  return (
    <Container images={images} height={height} titles={titles} buttonText={buttonText} gradientColor={gradientColor}>
      <ButtonWrapper>
        <FontAwesomeIcon onClick={handlePrevClick} icon={faChevronLeft} />
        <FontAwesomeIcon  onClick={handleNextClick} icon={faChevronRight}/>
      </ButtonWrapper>
      <ContentWrapper>
        <InfoBox>
          <Title>{titles[currentTitle]}</Title>
          <ButtonBox>
            <MainWhiteButton>{buttonText[0]}</MainWhiteButton>
            <MainButton>{buttonText[1]}</MainButton>
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
    @media (max-width: 600px) {
      font-size: .9rem;
  
  }
  }
`;
const ContentWrapper = styled.div`
  z-index: 200;
  position: relative;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, rgba(19, 41, 26, 0.85), transparent);
`;


const InfoBox = styled.div `
  display: flex;
  flex-direction: column;
  margin:0;
  width: 60%;
  position: absolute;
  bottom: 4%;
  left: 5%;
  font-family: "Titillium Web", sans-serif;
  @media (max-width: 800px) {
    width: 100%;
    left: 0%;
  }
`
const Title = styled.h2 `
  color: white;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    font-size: 1.3rem;
    text-align: center;
  }
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
  width: 20%;
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
  @media (max-width: 600px) {
    width: 50%;
    margin-right: 2%;
    margin-left: 2%;
  }
  
`
const MainWhiteButton = styled.button `
  border-radius: .2rem;
  font-weight: 500;
  width: 20%;
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
  @media (max-width: 600px) {
    width: 50%;
    margin-right: 2%;
    margin-left: 2%;
  }
`



