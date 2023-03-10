import styled from "styled-components";

export type RecipeCardProps = {
  image: string;
  title: string;
  description: string;
};

export const RecipeCard = ({ image, title, description }: RecipeCardProps) => {
  return (
    <StyledRecipeCardDiv>
      <StyledRecipeCardWrapper>
        <StyledRecipeCardImage src={image} alt={title} />
        <StyledRecipeCardTitle>{title}</StyledRecipeCardTitle>
        <StyledRecipeCardDesc>{description}</StyledRecipeCardDesc>
      </StyledRecipeCardWrapper>
    </StyledRecipeCardDiv>
  );
};

export const StyledRecipeCardDiv = styled.div `
  margin: 10px;
  padding-bottom: 30px;
`;

export const StyledRecipeCardWrapper = styled.div `
  display: flex;
  flex-direction: column; 
  width: 300px;
  background-color: white;
  box-shadow: 0px 4px 2px #dfd7d7;
  cursor: pointer;
`;

export const StyledRecipeCardImage = styled.img `
  width: 100%; 
  height: 400px;
  object-fit: cover;
`;

export const StyledRecipeCardTitle = styled.h2 `
  text-align: center;
  color: #141f12;
  font-size: 18px;
  padding: 25px 10px 0px 10px;
  font-family: 'Ubuntu Condensed', sans-serif;
`;

export const StyledRecipeCardDesc = styled.p `
  color: #141f12;
  font-size: 16px;
  height: 105px;
  padding: 10px 10px 20px 10px;
  font-family: "Titillium Web", sans-serif;
  text-align: center;
`;
