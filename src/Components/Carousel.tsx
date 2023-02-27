import { useState } from "react";
import styled from "styled-components";

interface CarouselProps {
  images: string[];
}



export function Carousel({ images }: CarouselProps) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log("prevImg")
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log("nextImg")
  };

  return (
    <Container>
      <Image src={images[currentIndex]} alt="Carousel Image" />
      <ButtonWrapper>
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 30vh;
  width: 100%;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;