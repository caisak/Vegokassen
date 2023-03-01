export interface Product {
  name: string;
  image: string;
  price: number;
  description: string;
}

const ProductsList: Product[] = [
  {
    name: "Familjekassen",
    image: "src/Images/bag_1.jpg",
    price: 499,
    description: "Denna fantastiska matkasse är skapad för den upptagna familjen som älskar planeten och sig själva",
  },
  {
    name: "PlantPower™kassen",
    image: "src/Images/bag_transparent.png",
    price: 599,
    description: "Recept och ingredienser med extra protein för den som vill bli starkare utan att försvaga planeten.",
  },
  {
    name: "15-minuterskassen",
    image: "src/Images/groceries_2.jpg",
    price: 399,
    description: "Värna om planeten, er tid och er hälsa utan att kompromissa! Specialgjord med rätter som bara tar 15 minuter att laga. Hej då snabbmat, välkommen riktigt snabb mat!",
  },
  {
    name: "Fruktkassen",
    image: "src/Images/recipe7.jpg",
    price: 199,
    description: "Tillgodose veckans behov av vitaminer med vår populära fruktkasse.",
  },
];

export default ProductsList;
