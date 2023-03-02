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
  display: flex;
  flex-direction: column;
  background-color: white;
  cursor: pointer;
  margin: 0 auto;
  border-radius: 0.3rem;
  box-shadow: 0 0 10px #C0C0C0;
`;

export const StyledCategory = styled.p<{ backgroundColor: string; color: string }>`
  width: fit-content;
  position: absolute;
  margin-top: 100px;
  padding: 6px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`;

export const StyledRecipeCardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const StyledRecipeCardTitle = styled.h2`
  color: #392e7c;
  font-size: 18px;
  padding: 25px 10px 0px 10px;
  font-family: "Ubuntu Condensed", sans-serif;
`;

export const StyledRecipeCardDesc = styled.p`
  color: #392e7c;
  font-size: 16px;
  height: 80px;
  padding: 10px 10px 0px 10px;
  font-family: "Titillium Web", sans-serif;
`;

export const StyledRecipeCardTime = styled.p`
  color: red;
  padding: 0px 0px 10px 10px; 
`;
