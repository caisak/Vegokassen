import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { InputEmail, MyForm, SubmitButton } from "./Footer";

export function Test() {
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
    );
  }