import styled from "styled-components";

interface Props {
    numberProps: string;
    imgSrc: string;
    h2Props: string;
    text: string;
    altProps: string;
}

export function HowCard(props: Props) {
    return(
        <StyledCard>
            <StyledNumber>
            {props.numberProps}
            </StyledNumber>
            <StyledImgSrc src={props.imgSrc} alt={props.altProps} />
            <StyledH2>
                {props.h2Props}
            </StyledH2>
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
color: #142613;
width: 100%;
margin-top: 3rem;
display: flex;
flex-direction: column;
align-items: center;
justify-self: center;
align-self: center;
font-family: 'Titillium Web', sans-serif;
@media(min-width:900px){
    width: 100%;
    height: 23.5rem;
    
}
`

const StyledNumber = styled.h3`
background-color: #C6C9C5;
border-radius: 50%;
width: 2rem;
height: 2rem;
text-align: center;
margin: 0.5rem;
`

const StyledH2 = styled.h2`
margin: 1rem;
`

const StyledP = styled.p`
text-align: center;
margin: 1rem;
`;


const StyledImgSrc = styled.img`
border-radius: 50%;
width: 10rem;
height: 10rem;
object-fit: cover;
`;
