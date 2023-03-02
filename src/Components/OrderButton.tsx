import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
    text: string;
}

export function OrderButton(props: Props) {
    return (
    <StyledOrderDiv>
        <Link to="/produkter">
        <StyledOrder>
        {props.text}
        </StyledOrder>
        </Link>
    </StyledOrderDiv>
    )
}

export const StyledOrderDiv = styled.div `
background-color: #fff8ea;
height: 3rem;
width: 100%;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;
position: sticky;
`

export const StyledOrder = styled.button `
background-color:  #69a85f;
color: white;
height: 2rem;
width: 97vw;
border-radius: 0.3rem;
border: none;
font-family: 'Titillium Web', sans-serif;
font-size: large;
cursor: pointer;

&:hover {
    background-color: #699659;
}

&:active {
    transform: scale(0.99);
    box-shadow: 0 0 5px black;
}
`
