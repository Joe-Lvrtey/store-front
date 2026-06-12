import sales1 from "./images/sales1.png";
import sales2 from "./images/sales2.png";
import sales3 from "./images/sales3.png";
import sales4 from "./images/sales4.png";
import cake3 from "./images/cake3.jfif";
import cake8 from "./images/cake8.jpg";
import vendor1 from "./images/cake-2.jfif";
import vendor2 from "./images/vend2.jpg";
import vendor3 from "./images/vend3.jpg";
import vend4 from "./images/vend4.jpg";
import vendor4 from "./images/vendor3.jpg";
import vendor5 from "./images/vendor4.jpg";
import sub1 from "./images/sub1.jpg";
import sub2 from "./images/sub2.jpg";
import sub3 from "./images/sub3.jpg";
import sub4 from "./images/sub4.jpg";
import sub5 from "./images/sub6.jpg";
import vendAbout from "./images/about-cake - Copy.jfif";

export const data = [
  {
    id: 1,
    name: "Chocolate Velvet Cake",
    description:
      "Rich and moist chocolate cake layered with cream cheese frosting.",
    price: 600.0,
    image: sales1,
  },
  {
    id: 2,
    name: "Lemon Meringue Tart",
    description: "Tangy lemon curd topped with fluffy meringue.",
    price: 610.0,
    image: sales2,
  },
  {
    id: 3,
    name: "Classic Red Velvet Cake",
    description:
      "Velvety cake with a hint of cocoa, topped with cream cheese frosting.",
    price: 620.0,
    image: sales3,
  },
  {
    id: 4,
    name: "Vanilla Bean Cheesecake",
    description: "Smooth cheesecake infused with real vanilla beans.",
    price: 630.0,
    image: sales4,
  },
];

export const subSellersData = [
  {
    id: 201,
    name: "Lady M Confection",
    description: "Strawberry Swirl Mile Crepe Cake",
    price: 600,
    image: sub1,
  },
  {
    id: 202,
    name: "Lady M Confection",
    description: "Strawberry Swirl Mile Crepe Cake",
    price: 500,
    image: sub2,
  },
  {
    id: 203,
    name: "Lady M Confection",
    description: "Strawberry Swirl Mile Crepe Cake",
    price: 400,
    image: sub3,
  },
  {
    id: 204,
    name: "Lady M Confection",
    description: "Strawberry Swirl Mile Crepe Cake",
    price: 550,
    image: sub4,
  },
  {
    id: 205,
    name: "Lady M Confection",
    description: "Strawberry Swirl Mile Crepe Cake",
    price: 750,
    image: sub5,
  },
];

export const promotionData = [
  {
    id: 101,
    name: "Double chocolate cake",
    price: 300.0,
    image: cake8,
    description: "",
  },
  {
    id: 102,
    name: "Double chocolate cake",
    price: 300.0,
    image: cake3,
    description: "",
  },
];

export const vendorsData = [
  {
    id: 11,
    name: "Barbie Dream Eats",
    image: vendor1,
    link: "/vendor/vendor1",
  },
  {
    id: 13,
    name: "Hearty Tasty House",
    image: vendor3,
    link: "/vendor/vendor3",
  },
  {
    id: 14,
    name: "Joe's Top Picks",
    image: vendor4,
    link: "/vendor/vendor4",
  },
  {
    id: 15,
    name: "Hot 100",
    image: vendor5,
    link: "/vendor/vendor5",
  },
];

export const ourVendors = {
  vendor1: [
    {
      id: 111,
      image: vendAbout,
      name: "Barbie Dream Eats",
      description: "Strawberry Swirl Mille Crepe Cake",
      price: 600,
      about:
        "A rich and satisfying chocolate fudge cake made for true dessert lovers. Moist layers, deep cocoa flavor, and a smooth finish make this a crowd favorite for family gatherings and celebrations.",
      sub: "Barbie Dream Eats House is known for comforting, homemade-style desserts prepared with care and generous portions.",
    },
  ],
  vendor2: [
    {
      id: 222,
      image: vendor2,
      name: "Hearty Tasty House",
      description: "Classic Chocolate Fudge Cake",
      price: 450,
      about:
        "This cake is seriously GIANT! The skyscraping 20-layer Chocolate Peanut Butter Cake features alternating layers of rich cake and smooth peanut butter mascarpone. Crafted with premium ingredients, it’s perfect for luxury celebrations and unforgettable moments.",
      sub: " Hearty Tasty specializes in premium desserts made for birthdays, weddings, and special occasions, delivering elegance in every bite.",
    },
  ],
  vendor3: [
    {
      id: 333,
      image: vendor3,
      name: "Joe's Pick",
      description: "Vanilla Buttercream Celebration Cake",
      price: 380,
      about:
        "Light, fluffy vanilla sponge layered with smooth buttercream frosting. This cake delivers a timeless taste that never goes out of style, perfect for any celebration.",
      sub: "Joe's Pick focuses on simple, well-loved flavors made fresh and delivered with consistency you can trust.",
    },
  ],
  vendor4: [
    {
      id: 444,
      image: vend4,
      name: "Joe's Top Picks",
      description: "Red Velvet Supreme Cake",
      price: 520,
      about:
        "Bold, rich, and indulgent red velvet cake layered with creamy frosting. Designed for those who love standout flavors and premium presentation.",
      sub: "Joe's Top Picks focuses on simple, well-loved flavors made fresh and delivered with consistency you can trust.",
    },
  ],
  vendor5: [
    {
      id: 555,
      image: vendor5,
      name: "Hot 100",
      description: "Red Velvet Supreme Cake",
      price: 520,
      about:
        "Bold, rich, and indulgent red velvet cake layered with creamy frosting. Designed for those who love standout flavors and premium presentation.",
      sub: "Hot 100 delivers trendy, high-demand desserts inspired by what customers love most, combining flavor with style.",
    },
  ],
} as const;
