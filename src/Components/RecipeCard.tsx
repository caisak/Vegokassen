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
      <img src={image} alt={title} />
      <StyledRecipeCardTitle>{title}</StyledRecipeCardTitle>
      <StyledRecipeCardDesc>{description}</StyledRecipeCardDesc>
    </StyledRecipeCardWrapper>
  </StyledRecipeCardDiv>
  );
};

// Styled components
export const StyledRecipeCardDiv = styled.div `
  color: black; 
`

export const StyledRecipeCardWrapper = styled.div `
  color: black; 
`

export const StyledRecipeCardTitle = styled.h1 `
  color: red; 
`

export const StyledRecipeCardDesc = styled.p `
  color: black; 
`

