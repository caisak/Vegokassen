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
  background-color: #F8E1A6;
  border: none;
  font-size: 1rem;
  padding: 10px;
  transition: 0.2s;
  border-radius: .3rem;

  &:hover {
    background-color: #D5C08D;
  }
  
  &:active {
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
  }
`;



