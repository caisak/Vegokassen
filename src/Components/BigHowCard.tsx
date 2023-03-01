import styled from "styled-components";

interface Props {
text: string;

}

export function BigHowCard(props: Props) {
  return (
  <StyledBigDiv>
    <StyledBigImg src="" alt="" />
    <StyledBigHeader>

    </StyledBigHeader>
    <StyledBigText>

    </StyledBigText>

  </StyledBigDiv>
  );
}

const StyledBigDiv = styled.div`
background-color: hotpink;
height: 50vh;
width: 100%;
`

const StyledBigImg = styled.img`

`

const StyledBigHeader = styled.h2`

`

const StyledBigText = styled.p`

`
