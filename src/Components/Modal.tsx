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
                <h2>Glöm inte bort oss!</h2>
                <p>Få 10% rabatt när du prenumerar på vårt nyhetsbrev</p>
                <EmailInput type="email" />
                <p>Jag är mest intresserad av:</p>
                <CheckboxDiv>
                    <div>
                        <Checkbox type="checkbox" name="billigt" id="billigt" />
                        <label htmlFor="billigt">Billigt</label>

                    </div>
                    <div>
                        <Checkbox type="checkbox" name="green" id="billigt" />
                        <label htmlFor="green">Grönt</label>
                    </div>
                    <div>
                        <Checkbox type="checkbox" name="frukt" id="billigt" />
                        <label htmlFor="frukt">Frukt</label>
                    </div>
                </CheckboxDiv>
                <SubmitButton onClick={closeModal}>Håll mig uppdaterad!</SubmitButton>
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
  color: #1c3529;
  height: 100%;
  box-shadow: 0 2px 4px rgba(0, 3, 3, 0.2);
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

const SubmitButton = styled.button`
  background-color: #69a85f;
  border: none;
  width: 100%;
  font-size: 1rem;
  padding: .7rem;
  transition: 0.2s;
  border-radius: .3rem;
  cursor: pointer;
  color: #ffffff;
  font-family: "Titillium Web", sans-serif;
  &:hover {
    background-color: #54ad83;
  }
  &:active {
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
  }
`
const EmailInput = styled.input `
border: 1.5px solid #808080;
width: 100%;
height: 1.7rem;
border-radius: .2rem;
margin: .3rem;

`
const CheckboxDiv = styled.div `
width: 100%;
    display:flex;
    justify-content: space-around;
    margin-bottom:.4rem;
`
const Checkbox = styled.input.attrs({ type: "checkbox" })`
  border-radius: 50%;
  accent-color: #69a85f;
  margin-right:4px;
`

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
