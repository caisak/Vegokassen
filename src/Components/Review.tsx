import React from 'react';
import styled from 'styled-components';

// Define the interface for the review card props
interface ReviewCardProps {
    image: string;
  title: string;
  content: string;
  author: string;
  stars:number;
}

// Define an array of review card data
const reviewData: ReviewCardProps[] = [
  {
    image:"src/Images/food_10.jpg",
    title: 'Great Product!',
    content: 'I love this product. It is very high quality and does exactly what I need it to do.',
    author: 'John Smith',
    stars:2,
  },
  {
    image:"src/Images/food_10.jpg",
    title: 'Disappointed',
    content: 'I had high hopes for this product but it did not meet my expectations.',
    author: 'Jane Doe',
    stars:1

  },
  {
    image:"src/Images/food_10.jpg",
    title: 'Amazing!',
    content: 'This product exceeded my expectations. I would highly recommend it to anyone.',
    author: 'Bob Johnson',
    stars:5
  },
  {
    image:"src/Images/food_10.jpg",
    title: 'Terrible Service',
    content: 'I had a terrible experience with the customer service for this product.',
    author: 'Samantha Lee',
    stars:5
  },
  {
    image:"src/Images/food_8.jpg",
    title: 'Very Satisfied',
    content: 'This product was exactly what I was looking for. I am very happy with my purchase.',
    author: 'Mike Williams',
    stars:5
  },
  {
    image:"src/Images/food_10.jpg",
    title: 'Poor Quality',
    content: 'The quality of this product was very poor. I would not recommend it to anyone.',
    author: 'Sarah Thompson',
    stars:2
  },
  {
    image:"src/Images/food_10.jpg",
    title: 'Excellent!',
    content: 'This is the best product I have ever used. I am extremely satisfied with my purchase.',
    author: 'David Wilson',
    stars:5
  },
  {
    image:"src/Images/food_10.jpg",
    title: 'Could be Better',
    content: 'This product is good, but it could be better. I have some suggestions for improvementThis product is good, but it could be better. I have some suggestions for improvement.',
    author: 'Jessica Chen',
    stars:3
  },
  {
    image:"src/Images/food_10.jpg",
    title: 'Great Value',
    content: 'This product is a great value for the price. I would definitely buy it again.',
    author: 'Tom Brown',
    stars:5
  },
  {
    image:"src/Images/food_10.jpg",
    title: 'Not What I Expected',
    content: 'This product was not what I expected. I would not recommend it.',
    author: 'Emily Davis',
    stars:2
  }
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
const ReviewCard: React.FC<ReviewCardProps> = ({ image, title, content, author, stars}) => {
  const starArray=generateStars(stars)
  return (
    <Card>
      <div>
        <img src={image} alt="review picture" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <StarRating>{starArray.join('')}</StarRating>
        <span>By {author}</span>
      </div>
    </Card>
  );
};

const StarRating = styled.p `
font-size: 1.5rem;
color: #7c7c7c;

`


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
    background-color: #f0efde;
    border-radius: .8rem;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: #dfdba5;
  }

  @media (min-width: 992px) {
    &::-webkit-scrollbar {
      display: block;
    }
  }
`;

const Card = styled.div`
  font-family: "Titillium Web", sans-serif;
  border-radius: .3rem;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22rem;
  height: 25rem;
  margin: 1.3rem 1.2rem;
  padding: 1.3rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 5, 3, 0.3);
  @media (max-width: 700px) {
    width: 15rem;
    margin: .5rem .5rem;
    padding: .7rem;
 
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
    margin-top: 0;
  }

  p {
    margin-bottom: .8rem;
    @media (max-width: 700px) {
    font-size: .9rem;

 
  }
  }

  span {
    font-size: .9rem;
    color: #888;
    @media (max-width: 700px) {
    font-size: .7rem;
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

