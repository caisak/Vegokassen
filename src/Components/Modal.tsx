import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
    onClose();
  };

  return (
    <>
      {showModal && (
        <MyModal>
          <ModalContent>
            <CloseButton onClick={closeModal}>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </CloseButton>
            <WhiteBox>
                <h3>Glöm inte bort oss!</h3>
                <p>Få 10% rabatt när du prenumerar på vårt nyhetsbrev</p>

   
            </WhiteBox>
          </ModalContent>
        </MyModal>
      )}
    </>
  );
};

const MyModal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 14, 9, 0.6);
  overflow: auto;
  font-family: "Titillium Web", sans-serif;
`;

const ModalContent = styled.div`
  background-image: url("src/Images/fruits_white_green.jpg");
  background-size: cover;
  background-position: center;
  margin: auto;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 5, 3, 0.3);
  height: 25rem;
  width: 90%;
  max-width: 39rem;
  position: relative;
  @media (max-width: 600px) {
    width: 98%;
    height: 20rem;
    padding: 0.6rem;
  }
`;

const WhiteBox = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  margin-right: 3px;
  padding: 1rem;
  float: right;
  width: 60%;
  height: 100%;
  box-shadow: 0 2px 4px rgba(0, 3, 3, 0.2);
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

const CloseButton = styled.span`
  color: #105434;
  position: absolute;
  top: 1%;
  left: 97%;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
    left: 97%;
  }
`;
