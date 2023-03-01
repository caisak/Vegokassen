import styled from "styled-components";

type ButtonProps = {
  text: string;
};

export function Button(props: ButtonProps) {
  return(
    <MyButton>
      {props.text}
    </MyButton>
  )
}

export const MyButton = styled.button`
  background-color: #f8e1a6;
  border: none;
  font-size: 1rem;
  padding: 10px;
  transition: 0.2s;
  border-radius: .3rem;
  cursor: pointer;
  color: #1c3529;
  font-family: "Titillium Web", sans-serif;


  &:hover {
    background-color: #D5C08D;
  }
  
  &:active {
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
  }
`;



