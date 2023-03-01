import {
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function Footer() {
  const [buttonText, setButtonText] = useState("Gå med!");
  const [buttonColor, setButtonColor] = useState("white");
  const [newsLetterText, setNewsLetterText] = useState(
    "Prenumerera på vårt nyhetsbrev!"
  );
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setButtonText("✓");
    setButtonColor("#76A887");
    setNewsLetterText("Tack!");
    setFormSubmitted(true);
  };

  return (
    <MyFooter>
      <Link to="*">
        <FontAwesomeIcon
          icon={faFacebook}
          size="2x"
          style={{ color: "white" }}
        />
      </Link>
      <Link to="*">
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
          style={{ color: "white" }}
        />
      </Link>
      <Link to="*">
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          style={{ color: "white" }}
        />
      </Link>

      <MyForm onSubmit={handleSubmit}>
        <div>
          <label>
            {newsLetterText} <FontAwesomeIcon icon={faEnvelope} />
          </label>
          <br />
          {formSubmitted ? null : <InputEmail />}
        </div>
        <SubmitButton
          style={{
            backgroundColor: buttonColor,
            color: buttonText === "✓" ? "white" : "black",
          }}
          value={buttonText}
        />
      </MyForm>
    </MyFooter>
  );
}

export const MyFooter = styled.footer`
  color: white;
  position: relative;
  width: 100%;
  bottom: 0;
  background-color: #1c3529;
  padding: 0.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Titillium Web", sans-serif;
  padding-bottom: 15px;
`;

export const MyForm = styled.form`
  color: white;
  display: flex;
  column-gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const InputEmail = styled.input.attrs({ type: "text" })`
  width: 96%;

  &:focus {
    outline: none;
    border: none;
  }
`;

const SubmitButton = styled.input.attrs({ type: "submit" })`
  border-radius: 99px;
  padding: 15px;
  border: none;
  font-family: inherit;
  width: 5rem;
  height: 100%;

  &:hover {
    background-color: gray;
  }

  &:active {
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
  }
`;
