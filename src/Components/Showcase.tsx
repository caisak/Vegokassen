import styled from "styled-components";

interface Props {
    title:string
    text:string
    secondText:string
    image:string
    textColor:string
    accentTextColor:string
    gradient:string
}


export function Showcase({ title, text, secondText, image, textColor, accentTextColor, gradient}: Props) {
    return(
  
        <ShowCaseDiv title={title} text={text} secondText={secondText} image={image} textColor={textColor} accentTextColor={accentTextColor} gradient={gradient}>
              <Overlay title={title} text={text} secondText={secondText} image={image} textColor={textColor} accentTextColor={accentTextColor} gradient={gradient}>
            <Content title={title} text={text} secondText={secondText} image={image} textColor={textColor} accentTextColor={accentTextColor} gradient={gradient}>
                <h1>{title}</h1>
                <p>{text}</p>
                <h3>{secondText}</h3>
            </Content>
            </Overlay>
        </ShowCaseDiv>
      
    )
}

const Overlay = styled.div<Props> `
  width:100%;
  height: fit-content;
  background-image: linear-gradient(to top, ${(props) => props.gradient}, transparent);
  display: flex;
  justify-content: center;
`

const ShowCaseDiv = styled.div <Props>`
    width: 100%;
    display: flex;
    justify-content: center;
    height: fit-content;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;

`

const Content = styled.div<Props>`
  max-width: 69rem;
  min-width: 360px;
  margin: 2rem 0.5rem;
  padding: 0.5rem;
  font-family: "Titillium Web", sans-serif;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.textColor};

  @media (max-width: 800px) {
    margin: 0.5rem 0.5rem;
  }

  h1 {
    margin-bottom: 2rem;
    @media (max-width: 600px) {
      margin-bottom: 1rem;
    }
  }

  p {
    margin-bottom: 2%;
    font-weight: 700;
    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
  }

  h3 {

    margin-bottom: .2rem;
    color: ${(props) => props.accentTextColor};
    @media (max-width: 600px) {
      font-size: 0.9rem;
      margin-bottom: 0.1rem;
    }
  }
`;
