import { useEffect, useState } from 'react';

interface PopulationData {
  year: number;
  population: number;
}

const MyComponent = () => {
  const [populationData, setPopulationData] = useState<PopulationData[]>([]);

  useEffect(() => {
    const fetchPopulationData = async () => {
      const response = await fetch('https://api.scb.se/OV0104/v1/doris/sv/ssd/BE/BE0101/BE0101A/BefolkningNy', {
        method: 'POST',
        body: JSON.stringify({
          query: [
            {
              code: 'ContentsCode',
              selection: {
                filter: 'item',
                values: ['BE0101N1'],
              },
            },
            {
              code: 'Tid',
              selection: {
                filter: 'item',
                values: ['2011', '2012','2013',],
              },
            },
          ],
          response: {
            format: 'json',
          },
        }),
      });

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
    <div>
      <h1>Population data for Sweden</h1>
      <ul>
        {populationData.map((data) => (
          <li key={data.year}>
            <strong>{data.year}: </strong>
            {data.population}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;