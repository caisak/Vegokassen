export interface Product {
  name: string;
  image: string;
  price: number;
  description: string;
}

const ProductsList: Product[] = [
  {
    name: "Klassisk och inspirerande",
    image: "src/Images/bag_1.jpg",
    price: 499,
    description: "text om kassen",
  },
  {
    name: "Enkelt och lättlagat",
    image: "src/Images/bag_transparent.png",
    price: 399,
    description: "text om kassen",
  },
  {
    name: "Barnfamilj",
    image: "src/Images/groceries_2.jpg",
    price: 599,
    description: "text om kassen",
  },
  {
    name: "placeholder",
    image: "src/Images/recipe7.jpg",
    price: 599,
    description: "text om kassen",
  },
];

export default ProductsList;
