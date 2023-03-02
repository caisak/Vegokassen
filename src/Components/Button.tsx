import { Link } from "react-router-dom";
import styled from "styled-components";

type ButtonProps = {
  text: string;
};

//generic button example
export function Button(props: ButtonProps) {
  return <MyButton>{props.text}</MyButton>;
}

//button that links to the products page
export function OrderHereButton(props: ButtonProps) {
  return (
    <div>
      <Link to="/produkter">
        <BigCardButton>{props.text}</BigCardButton>
      </Link>
    </div>
  );
}

//button that links to the how it works page
export function ReadMoreButton(props: ButtonProps) {
  return (
    <div>
      <Link to="/safunkardet">
        <BigCardButton>{props.text}</BigCardButton>
      </Link>
    </div>
  );
}

//button that links to recipe page
export function RecipeButton(props: ButtonProps) {
  return (
    <div>
      <Link to="/recept">
        <BigCardButton>{props.text}</BigCardButton>
      </Link>
    </div>
  );
}

//generic button example style
export const MyButton = styled.button`
  background-color: #f8e1a6;
  border: none;
  font-size: 1rem;
  padding: 10px;
  transition: 0.2s;
  border-radius: 0.3rem;
  cursor: pointer;
  color: #1c3529;
  font-family: "Titillium Web", sans-serif;

  &:hover {
    background-color: #d5c08d;
  }

  &:active {
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
  }
`;

// style for OrderHereButton, ReadMoreButton and RecipeButton
const BigCardButton = styled.button`
  background-color: #ffe282;
  border: none;
  width: 10rem;
  font-size: 1rem;
  padding: 10px;
  transition: 0.2s;
  border-radius: 0.3rem;
  cursor: pointer;
  color: #142613;
  margin-bottom: 1rem;
  font-family: "Titillium Web", sans-serif;

  &:hover {
    background-color: #d5c08d;
  }

  &:active {
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
  }
`;
