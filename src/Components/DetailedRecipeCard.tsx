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
  width: calc(100% / 3 - 40px); /* distribute cards evenly and subtract margins */
`;

export const StyledRecipeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 4px 2px #dfd7d7;
  cursor: pointer;
  margin: 0 auto; /* center the cards horizontally */
`;

export const StyledCategory = styled.p<{ backgroundColor: string; color: string }>`
  width: fit-content;
  padding: 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`;


export const StyledRecipeCardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const StyledRecipeCardTitle = styled.h2`
  text-align: center;
  color: #392e7c;
  font-size: 18px;
  padding: 25px 10px 0px 10px;
  font-family: "Ubuntu Condensed", sans-serif;
`;

export const StyledRecipeCardDesc = styled.p`
  color: #392e7c;
  font-size: 16px;
  height: 50px;
  padding: 10px 10px 0px 10px;
  font-family: "Titillium Web", sans-serif;
  text-align: center;
`;

export const StyledRecipeCardTime = styled.p`
  color: red;
  text-align: center;
`;
