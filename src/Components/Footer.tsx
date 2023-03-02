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
      <SocialLinks>
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
      </SocialLinks>
      <MyForm onSubmit={handleSubmit}>
        <div>
          <label>
            {newsLetterText} <EmailIcon><FontAwesomeIcon icon={faEnvelope} /></EmailIcon>
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
  width: 100%;
  bottom: 0;
  background-color: #1c3529;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Titillium Web", sans-serif;
  position: absolute;
  bottom: 0;
`;

export const SocialLinks = styled.div`
display: flex;
justify-content: space-between;
column-gap: 20px;

@media (max-width: 400px) {
  column-gap: 2px;
}

`;

export const MyForm = styled.form`
  color: white;
  display: flex;
  column-gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const InputEmail = styled.input.attrs({ type: "text" })`
  width: 100%;
  border-radius: 0.3rem;
  border: none;

  &:focus {
    outline: none;
    border: none;
  }
`;

export const EmailIcon = styled.span`
@media (max-width: 500px) {
  display: none;
}
`

const SubmitButton = styled.input.attrs({ type: "submit" })`
  border-radius: 0.3rem;
  border: none;
  font-family: inherit;
  width: 5rem;
  padding: 10px;
  height: 100%;
  
  &:hover {
    background-color: gray;
  }

  &:active {
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
  }

  @media (max-width: 500px) {
    display: none;
  }

`;
