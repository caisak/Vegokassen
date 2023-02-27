import styled from "styled-components";

interface Props {
    numberProps: string;
    imgSrc: string;
    h2Props: string;
    text: string;
}

export function HowCard(props: Props) {
    return(
        <StyledCard>
            <h3>
            {props.numberProps}
            </h3>
            <StyledImgSrc src={props.imgSrc} alt="" />
            <h2>
                {props.h2Props}
            </h2>
            <StyledP>
                {props.text}
            </StyledP>
        </StyledCard>
    )
}

const StyledCard = styled.div`
border-radius: 0.5rem;
box-shadow: 0 0 10px #C0C0C0;
background-color: #FFFF;
height: 25rem;
width: 18rem;
display: flex;
flex-direction: column;
align-items: center;
margin: 3rem;
font-family: 'Titillium Web', sans-serif;
`;

const StyledP = styled.p`
text-align: center;
margin: 1rem;
`;


const StyledImgSrc = styled.img`
border-radius: 50%;
width: 10rem;
height: 10rem;
object-fit: cover;
//object-position: 50% 50%;
`;
