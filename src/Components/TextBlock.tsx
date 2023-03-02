import styled from "styled-components";

interface Props {
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
}

export const TextBlock = ({
  title,
  description,
  backgroundColor,
  textColor,
}: Props) => {
  return (
    <TextBlockContainer
      title={title}
      description={description}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </TextBlockContainer>
  );
};

const TextBlockContainer = styled.div<Props>`
  padding: 1.7rem 0rem 2.5rem;
  background-color: ${(props) => `${props.backgroundColor}`};
  color: ${(props) => `${props.textColor}`};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Titillium Web", sans-serif;
  @media (max-width: 700px) {
    padding: 0.9rem 0rem 0.9rem;
  }

  div {
    max-width: 65rem;
  }

  h1 {
    margin-bottom: 0.6rem;
    @media (max-width: 700px) {
      font-size: 1.3rem;
      margin-bottom: 0.4rem;
    }
  }
  p {
    @media (max-width: 700px) {
      font-size: 0.8rem;
      margin-bottom: 0.4rem;
    }
  }
`;
