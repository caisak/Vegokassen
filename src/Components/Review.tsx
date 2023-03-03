import React from "react";
import styled from "styled-components";

// Define the interface for the review card props
interface ReviewCardProps {
  image: string;
  title: string;
  content: string;
  author: string;
  stars: number;
  kasse: string;
}

// Reviews, maximum of 170 characters to still fit inside the card.
const reviewData: ReviewCardProps[] = [
  {
    image: "Images/happy_couple_small.jpg",
    title: "Vegokassen räddade mitt äktenskap",
    content:
      "Jag ÄLSKAR Vego kassen! Förut bråkade vi alltid om vilken middag vi skulle äta. Nu äter vi morötter varje dag!",
    author: "Marianne S.",
    stars: 5,
    kasse: "Familjekassen",
  },
  {
    image: "Images/smoothie.jpg",
    title: "Mina barn äter äntligen grönsaker!",
    content: "Jättebra recept som passar till hela familjen!",
    author: "Stina L.",
    stars: 5,
    kasse: "Familjekassen",
  },
  {
    image: "Images/food_8.jpg",
    title: "Plant Power kassen",
    content:
      "Jag och frugan har så mycket mer energi efter att vi bytte till er matkasse. Känner mig ung igen höhöhö",
    author: "Micke W.",
    stars: 5,
    kasse: "Plant Power™kassen",
  },
  {
    image: "Images/groceries_1.jpg",
    title: "Älskar 15-minuterskassen!",
    content:
      "Jag är singel och hatar att laga mat till bara mig själv så 15-minuterskassen är bäst. Älskar när mitt haul kommer <3 Iaf mitt telefonnummer är",
    author: "Sara T.",
    stars: 5,
    kasse: "15-minuterskassen",
  },
  {
    image: "Images/food_10.jpg",
    title: "Mye fornøyd",
    content:
      "Maten er av første klasse, mye fornøyd!Rask og veldig hyggelig kundeservice.",
    author: "Bengt-Olof J.",
    stars: 5,
    kasse: "Plant Power™kassen",
  },
  {
    image: "Images/groceries_2.jpg",
    title: "Ok",
    content: "Helt ok.",
    author: "Eva K.",
    stars: 3,
    kasse: "Familjekassen",
  },
  {
    image: "Images/apple1.jpg",
    title: "Bra förutom möglig paprika och äpple",
    content:
      "Bra matkasse men paprikan jag fick var möglig och någon hade tagit en tugga av ett äpple. Inte så kul men annars bra.",
    author: "Anna H.",
    stars: 2,
    kasse: "Fruktkassen",
  },
  {
    image: "Images/cooking_4.jpg",
    title: "Otroliga matkassar!",
    content:
      "Det bästa som hänt mig! Jag älskar vegokassens mat och recept! Rödbetspaj 7 dagar i rad.",
    author: "John S.",
    stars: 1,
    kasse: "Familjekassen",
  },
  {
    image: "Images/thumbs_down.jpg",
    title: "Mina barn gillar inte grönsaker och äter inte vegetariskt",
    content: "Kommer INTE köpa igen.",
    author: "Emelie D.",
    stars: 1,
    kasse: "Familjekassen",
  },
  {
    image: "Images/banana.jpg",
    title: "Blev inte mätt",
    content: "Fruktkassen räcker INTE till två vuxna i en hel vecka.",
    author: "David J.",
    stars: 1,
    kasse: "Fruktkassen",
  },
];

const generateStars = (count: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < count) {
      stars.push("⭐");
    } else {
      stars.push("✩");
    }
  }
  return stars;
};

// Define the ReviewCard component
const ReviewCard: React.FC<ReviewCardProps> = ({
  image,
  title,
  content,
  author,
  stars,
  kasse,
}) => {
  const starArray = generateStars(stars);
  return (
    <Card>
      <div>
        <img src={image} alt="review picture" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <StarRating>{starArray.join("")}</StarRating>
        <StyledKasse>{kasse}</StyledKasse>
        <span>{author}</span>
      </div>
    </Card>
  );
};

const StarRating = styled.p`
  font-size: 1.5rem;
  color: #7c7c7c;
`;

const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  -ms-overflow-style: none;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    width: 3px;
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e9e8d2;
    border-radius: 1rem;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #dfdba5;
  }

  @media (min-width: 800px) {
    &::-webkit-scrollbar {
      display: block;
      height: 0.5rem;
    }
  }
`;

const StyledKasse = styled.p`
  color: green;
`;

const Card = styled.div`
  font-family: "Titillium Web", sans-serif;
  border-radius: 0.3rem;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22rem;
  height: 25rem;
  margin: 1.3rem 1.2rem;
  padding: 1.2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 5, 3, 0.3);
  @media (max-width: 700px) {
    width: 15rem;
    margin: 0.5rem 0.5rem;
    padding: 0.3rem;
    height: 23rem;
  }
  div {
    width: 100%;
    height: 50%;
    border-radius: 0.3rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h3 {
    font-family: "Ubuntu Condensed", sans-serif;
    font-size: 1.2rem;
    margin-top: 0.3rem;
    margin-bottom: 3px;
    @media (max-width: 700px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 0.95rem;
    margin-bottom: 0.3rem;
    @media (max-width: 700px) {
      font-size: 0.85rem;
      margin-bottom: 0.2rem;
    }
  }

  span {
    font-size: 0.9rem;
    color: #888;
    @media (max-width: 700px) {
      font-size: 0.7rem;
    }
  }
`;

// Define the ReviewCards component
export const ReviewCards: React.FC = () => {
  return (
    <Container>
      {reviewData.map((review) => (
        <ReviewCard key={review.title} {...review} />
      ))}
    </Container>
  );
};
