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

// Styled components
export const StyledRecipeCardDiv = styled.div `
  box-shadow: 3px 2px 3px gray;
  margin: 10px;
`

export const StyledRecipeCardWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const StyledRecipeCardImage = styled.img `
  width: 300px; 
  height: 400px;
`

export const StyledRecipeCardTitle = styled.h1 `
  text-align: center;
  color: #392E7C;
`

export const StyledRecipeCardDesc = styled.p `
  color: #392E7C;
  padding: 10px 0px 0px 10px;
`