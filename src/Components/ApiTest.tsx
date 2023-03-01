import { useEffect, useState } from "react";
import styled from "styled-components";

interface PopulationData {
  year: number;
  population: number;
}

const MyComponent = () => {
  const [populationData, setPopulationData] = useState<PopulationData[]>([]);

  useEffect(() => {
    const fetchPopulationData = async () => {
      const response = await fetch(
        "https://api.scb.se/OV0104/v1/doris/sv/ssd/BE/BE0101/BE0101A/BefolkningNy",
        {
          method: "POST",
          body: JSON.stringify({
            query: [
              {
                code: "ContentsCode",
                selection: {
                  filter: "item",
                  values: ["BE0101N1"],
                },
              },
              {
                code: "Tid",
                selection: {
                  filter: "item",
                  values: [
                    "2011",
                    "2012",
                    "2013",
                    "2014",
                    "2015",
                    "2016",
                    "2017",
                    "2018",
                    "2019",
                    "2020",
                    "2021",
                  ],
                },
              },
            ],
            response: {
              format: "json",
            },
          }),
        }
      );

      const data = await response.json();

      const populationData = data.data.map((item: any) => ({
        year: item.key[0],
        population: item.values[0],
      }));
      setPopulationData(populationData);
    };

    fetchPopulationData();
  }, []);

  return (
    <Wrapper>

    <VeganIsTheFuture>
        <div>
        <StyledH2>Sverige får fler vegetarianer varje år!</StyledH2>
        <p>*Sveriges befolkning statistik,scb.</p>
      <ul>
        {populationData.map((data) => (
          <li key={data.year}>
            <strong>{data.year}: </strong>
            {data.population}
          </li>
        ))}
      </ul>
        </div>
        <div>
            <img src="src/Images/1.png" alt="statistik" />
        </div>

    </VeganIsTheFuture>
    </Wrapper>
  );
};

const Wrapper = styled.div `
width: 100%;
display: flex;
justify-content: center;
height: fit-content;
background-image: url("src/Images/grass_1.jpg");
background-size: cover;
background-position: center;



`

const VeganIsTheFuture = styled.div`
  background-color: #ffffff;
  border-radius: .5rem;
  max-width: 82rem;
  min-width: 360px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  margin: 2rem .5rem;
  padding: 0.5rem;
  font-family: "Titillium Web", sans-serif;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    margin: .5rem .5rem;

  }

  div {
    margin: 3px;
    
  }
  p {       
     @media (max-width: 600px) {
        font-size: .8rem;

    }

  }
  ul {
    list-style: none;
    padding: 0;
  }
  img {
    width: 32rem;
    @media (max-width: 800px) {
    width: 100%;

    }

  }
  li {
        font-size: 1rem;
        @media (max-width: 600px) {
        font-size: .7rem;

    }

    }
 
`;
const StyledH2 = styled.h2`
  font-family: "Titillium Web", sans-serif;
  @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export default MyComponent;
