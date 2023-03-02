import styled from "styled-components";

export type RecipeCardProps = {
  image: string;
  tag: string; 
  title: string;
  description: string;
  time: string;
  tagBackgroundColor: string;
};

export const RecipeCard = ({ image, tag, title, description, time, tagBackgroundColor }: RecipeCardProps) => {
  return (
    <StyledRecipeCardDiv>
      <StyledRecipeCardWrapper>
        <StyledRecipeCardImage src={image} alt={title} />
        <StyledCategory backgroundColor={tagBackgroundColor} color="white">{tag}</StyledCategory>
        <StyledRecipeCardTitle>{title}</StyledRecipeCardTitle>
        <StyledRecipeCardDesc>{description}</StyledRecipeCardDesc>
        <StyledRecipeCardTime>{time}</StyledRecipeCardTime>
      </StyledRecipeCardWrapper>
    </StyledRecipeCardDiv>
  );
};

export const StyledRecipeCardDiv = styled.div`
  margin: 20px;
  width: 300px;
`;


export const StyledRecipeCardWrapper = styled.div`
  flex-direction: row; 
  justify-content: space-between; 
  background-color: white;
  cursor: pointer;
  border-radius: 0.3rem;
  box-shadow: 0 0 10px #C0C0C0;
  height: 300px;

`;

export const StyledCategory = styled.p<{ backgroundColor: string; color: string }>`
  width: fit-content;
  position: absolute;
  margin-top: -50px;
  padding: 6px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-family: "Titillium Web", sans-serif;
`;

export const StyledRecipeCardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const StyledRecipeCardTitle = styled.h2`
  color: #1c3429;
  font-size: 18px;
  padding: 10px 10px 0px 10px;
  font-family: "Ubuntu Condensed", sans-serif;
`;

export const StyledRecipeCardDesc = styled.p`
  color: #1c3429;
  font-size: 16px;
  padding: 5px 10px 0px 10px;
  font-family: "Titillium Web", sans-serif;
`;

export const StyledRecipeCardTime = styled.p`
  color: #ff8a48;
  padding: 20px 0px 10px 10px; 
  font-family: "Ubuntu Condensed", sans-serif;
`;


