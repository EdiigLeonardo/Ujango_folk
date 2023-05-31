import src from "../../../assets/item.jpeg";
import src1 from "../../../assets/iphone1.jpg";
import src2 from "../../../assets/iphone2.jpg";
import src3 from "../../../assets/iphone3.jpg";
import src4 from "../../../assets/iphone4.jpg";
import src5 from "../../../assets/iphone5.jpg";
import src6 from "../../../assets/iphone6.jpg";

export const getAllProducts = (username) => {
  const data = [
    {
      id: 0,
      src: src1,
      price: "8.99",
      title: "My book the end",
      description:
        "The GOAT Farm Lavender Goat Milk Soap with Essential Oils (5 oz.)",
      place: "Luanda",
      advertiser: "Gabriel",
    },
    {
      id: 1,
      src: src2,
      price: "10.99",
      title: "My new car",
      description: "The GOAT Farm Lavender Goat Milk Soap with ls (5 oz.)",
      place: "Benguela",
      advertiser: "João Francisco",
    },
    {
      id: 2,
      src: src3,
      price: "15.99",
      title: "In the end",
      description: "The GO with Essential Oils (5 oz.)",
      place: "Luanda",
      advertiser: "John keith",
    },
    {
      id: 3,
      src: src,
      price: "12.55",
      title: "Car in middle",
      description: "The GOAT with Essential Oils (5 oz.)",
      place: "Huambo",
      advertiser: "Ujango",
    },
    {
      id: 4,
      src: src4,
      price: "8.99",
      title: "In the end",
      description:
        "The GOAT Farm Lavender Goat Milk Soap with Essential Oils (5 oz.)",
      place: "Luanda",
      advertiser: "Ujango",
    },
    {
      id: 5,
      src: src5,
      price: "90",
      title: "In the end",
      description:
        "The GOAT Farm Lavender Goat Milk Soap with Essential Oils (5 oz.)",
      place: "Luanda",
      advertiser: "Ujango",
    },
    {
      id: 6,
      src: src6,
      price: "12.39",
      title: "House in forest",
      description: "My house soap with Essential Oils (5 oz.)",
      place: "Luanda",
      advertiser: "John",
    },
    {
      id: 7,
      src: src3,
      price: "8.99",
      title: "In the end",
      description: "The GOAT (5 oz.)",
      place: "Cabinda",
      advertiser: "George kevin",
    },
    {
      id: 8,
      src: src,
      price: "8.99",
      title: "In the end",
      description: "The GOAT (5 oz.)",
      place: "Cabinda",
      advertiser: "George kevin",
    },
    {
      id: 9,
      src: src2,
      price: "8.99",
      title: "In the end",
      description: "The GOAT (5 oz.)",
      place: "Cabinda",
      advertiser: "George kevin",
    },
    {
      id: 10,
      src: src1,
      price: "8.99",
      title: "In the end",
      description: "The GOAT (5 oz.)",
      place: "Cabinda",
      advertiser: "George kevin",
    },
  ];

  return data;
};
