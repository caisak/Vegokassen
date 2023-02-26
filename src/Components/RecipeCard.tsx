// import styled from "styled-components";

export type RecipeCardProps = {
  image: string;
  title: string;
  description: string;
};

export const RecipeCard = ({ image, title, description }: RecipeCardProps) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
