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
    <VeganIsTheFuture>
        <div>
        <StyledH2>Population data for Sweden</StyledH2>
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

        </div>

    </VeganIsTheFuture>
  );
};

const VeganIsTheFuture = styled.div`
  background-color: #8ac98a;
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 0.5rem;
  font-family: "Titillium Web", sans-serif;
  display: flex;

  div {

  }
  ul {
    list-style: none;
    padding: 0;
  }
`;
const StyledH2 = styled.h2`
  font-family: "Ubuntu Condensed", sans-serif;
`;

export default MyComponent;
