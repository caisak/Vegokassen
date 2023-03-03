export interface Product {
  name: string;
  image: string;
  price: number;
  description: string;
}

const ProductsList: Product[] = [
  {
    name: "Familjekassen",
    image: "public/Images/bag-4.png",
    price: 499,
    description: "Denna fantastiska matkasse är skapad för den upptagna familjen som älskar planeten och sig själva",
  },
  {
    name: "PlantPower™kassen",
    image: "public/Images/bag-1.png",
    price: 599,
    description: "Recept och ingredienser med extra protein för den som vill bli starkare utan att försvaga planeten.",
  },
  {
    name: "15-minuterskassen",
    image: "public/Images/bag-2.png",
    price: 399,
    description: "Värna om planeten, er tid och er hälsa utan att kompromissa! Rätterna i denna kasse tar bara 15 minuter att laga.",
  },
  {
    name: "Fruktkassen",
    image: "public/Images/bag-3.png",
    price: 149,
    description: "Tillgodose veckans behov av vitaminer med vår populära fruktkasse! En salig blandning av sött och syrligt.",
  },
];

export default ProductsList;
