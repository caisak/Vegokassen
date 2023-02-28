import React from 'react';
import styled from 'styled-components';

// Define the interface for the review card props
interface ReviewCardProps {
    image: string;
  title: string;
  content: string;
  author: string;
}

// Define an array of review card data
const reviewData: ReviewCardProps[] = [
  {
    image:"src/Images/food_10.jpg",
    title: 'Great Product!',
    content: 'I love this product. It is very high quality and does exactly what I need it to do.',
    author: 'John Smith'
  },
  {
    image:"src/Images/food_10.jpg",
    title: 'Disappointed',
    content: 'I had high hopes for this product but it did not meet my expectations.',
    author: 'Jane Doe'
  },
  {
    image:"src/Images/food_10.jpg",
    title: 'Amazing!',
    content: 'This product exceeded my expectations. I would highly recommend it to anyone.',
    author: 'Bob Johnson'
  },
  {
    image:"src/Images/food_10.jpg",
    title: 'Terrible Service',
    content: 'I had a terrible experience with the customer service for this product.',
    author: 'Samantha Lee'
  },
  {
    image:"src/Images/food_10.jpg",
    title: 'Very Satisfied',
    content: 'This product was exactly what I was looking for. I am very happy with my purchase.',
    author: 'Mike Williams'
  },
  {
    image:"src/Images/food_10.jpg",
    title: 'Poor Quality',
    content: 'The quality of this product was very poor. I would not recommend it to anyone.',
    author: 'Sarah Thompson'
  },
  {
    image:"src/Images/food_10.jpg",
    title: 'Excellent!',
    content: 'This is the best product I have ever used. I am extremely satisfied with my purchase.',
    author: 'David Wilson'
  },
  {
    image:"src/Images/food_10.jpg",
    title: 'Could be Better',
    content: 'This product is good, but it could be better. I have some suggestions for improvement.',
    author: 'Jessica Chen'
  },
  {
    image:"src/Images/food_10.jpg",
    title: 'Great Value',
    content: 'This product is a great value for the price. I would definitely buy it again.',
    author: 'Tom Brown'
  },
  {
    image:"src/Images/food_10.jpg",
    title: 'Not What I Expected',
    content: 'This product was not what I expected. I would not recommend it.',
    author: 'Emily Davis'
  }
];

// Define the ReviewCard component
const ReviewCard: React.FC<ReviewCardProps> = ({ image, title, content, author }) => {
  return (
    <Card>
        <img src={image} alt="review picture" />
      <h3>{title}</h3>
      <p>{content}</p>
      <span>By {author}</span>
    </Card>
  );
};

// Define the styled components
const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`;

const Card = styled.div`
font-family: "Titillium Web", sans-serif;
  flex: 0 0 auto;
  width: 300px;
  margin-right: 10px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
  }

  h3 {
    margin-top: 0;
  }

  p {
    margin-bottom: 10px;
  }

  span {
    font-size: 14px;
    color: #888;
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

