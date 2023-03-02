import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

interface PromotionAdProps {
  onClose: () => void;
  text: string;
}

export function PromotionAd({
  onClose,
  text,
}: PromotionAdProps): JSX.Element | null {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <StyledPromotionAd>
      <div></div>
      <StyledPromotionText>{text}</StyledPromotionText>
      <CloseAdButton onClick={handleClose} className="close-button">
        <FontAwesomeIcon icon={faXmark} />
      </CloseAdButton>
    </StyledPromotionAd>
  );
}

const StyledPromotionAd = styled.div`
  width: 100%;
  height: 2rem;
  background-color: rgba(255, 0, 0, 0.7);
  z-index: 20;
  border: 2px solid red;
  color: white;
  display: flex;
  font-family: "Titillium Web", sans-serif;
  font-size: 0.9rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    font-size: 0.7rem;
  }
`;

const StyledPromotionText = styled.p`
  text-align: center;
`;

const CloseAdButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  @media (max-width: 700px) {
    font-size: 0.9rem;
  }
`;
