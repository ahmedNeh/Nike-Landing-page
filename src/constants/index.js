import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
  jordan1Mid,
  pandaDunk1,
  pandaDunk2,
  pandaDunk3,
  pandaDunk4,
  pandaDunk5,
  jordan1Mid1,
  jordan1Mid2,
  jordan1Mid3,
  jordan1Mid4,
} from "../assets/images";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/About-us", label: "About Us" },
  { href: "/Products", label: "Products" },
  { href: "/Contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    id: "Panda-Dunks-Low",
    imgURL: pandaDunk1,
    name: "Panda Dunks Low",
    price: "$119.99",
    description:
      "The Nike Dunk Low is an easy score for your closet. This mid-‘80s hoops icon returns with super-durable construction and original colors. With ankle padding and rubber traction, this one is a slam dunk.",
    sizes: ["40 EU", "41 EU", "43 EU", "44 EU", "46 EU", "47 EU", "48 EU"],
    otherShoeImgsURL: [
      pandaDunk1,
      pandaDunk2,
      pandaDunk3,
      pandaDunk4,
      pandaDunk5,
    ],
  },
  {
    id: "Air-Jordan-1-Mid",
    imgURL: jordan1Mid,
    name: "Air Jordan 1 Mid",
    price: "$90.99",
    description:
      "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
    sizes: ["43 EU", "44 EU", "45 EU", "46 EU", "47 EU", "48 EU"],
    otherShoeImgsURL: [jordan1Mid1, jordan1Mid2, jordan1Mid3, jordan1Mid4],
  },
  {
    id: "Nike-Md-Runner-2",
    imgURL: shoe6,
    name: "Nike Md Runner 2",
    price: "$110.20",
    description: "",
    sizes: [
      "40 EU",
      "41 EU",
      "42 EU",
      "43 EU",
      "44 EU",
      "45 EU",
      "46 EU",
      "47 EU",
      "48 EU",
    ],
  },
  {
    id: "New-Balance-247-Sport-Pack",
    imgURL: shoe7,
    name: "New Balance 247 Sport Pack",
    price: "55.90",
    description: "",
    sizes: [
      "40 EU",
      "41 EU",
      "42 EU",
      "43 EU",
      "44 EU",
      "45 EU",
      "46 EU",
      "47 EU",
      "48 EU",
    ],
  },
];

export const services = [
  {
    iconURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    iconURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    iconURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
