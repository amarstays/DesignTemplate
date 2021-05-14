import { teamUrls, imgs } from "../assets/urls";
import { getImages } from "./methods";

export const navOptions = ["Philosophy", "Services", "Team", "Gallery"];

export const designerDetails = [
  {
    name: "Nikita Srilekha L",
    designation: "Lead Designer",
    profile: teamUrls.lead,
    details: `Basically from Bangalore, Srilekha holds a Bachelor’s degree in Architecture, and has completed various
    projects of different scales across the city. Her versatility and eye for detail is what brought her to
    Gruham Ti'Amore.`,
  },
  {
    name: "Pooja",
    designation: "Designer",
    profile: teamUrls.pooja,
    details: `Based in pune, very energetic and passionate about interiors. She defines designing is love and her design statememt says it all. `,
  },
  {
    name: "Sunil Nibbulal Vishwakarma",
    designation: "Designer",
    profile: teamUrls.sunil,
    details: `Experienced Interior Designer with a demonstrated history of working in the architecture and planning Industry. `,
  },
  {
    name: "Nidhi Mehta",
    designation: "Designer",
    profile: teamUrls.nidhi,
    details: `Creative Interior Design with a strong background in project management, space planning, and computer-aided design, seeking to take next career step with a respected design firm focused on creating world-class hospitality and living spaces. `,
  },
  {
    name: "Simran Lunkad",
    designation: "Designer",
    profile: teamUrls.simran,
    details: `Bangalore based. An interior designer trying to decorate the beauty of houses and Making it a HOME. `,
  },
];

export const rooms = [
  {
    key: "foyer",
    quote:
      "Imagination is everything. It is the preview of life's coming attractions",
    author: "Albert Eintein",
    room: "Foyer",
    images: getImages("foyer"),
  },
  {
    key: "living-room",
    quote: "Creativity is contagious, pass it on",
    author: "Albert Einstein",
    room: "Living Room",
    images: getImages("living"),
  },
  {
    key: "kitchen",
    quote:
      "The most indespensable ingredients of all good home is love for those you are cooking for",
    author: "Sophia Loren",
    room: "Kitchen",
    images: getImages("kitchen"),
  },
  {
    key: "dining-room",
    quote:
      "The most indespensable ingredients of all good home is love for those you are cooking for",
    author: "Sophia Loren",
    room: "Dining Room",
    images: getImages("dining"),
  },
  {
    key: "bed-room",
    room: "Bed Room",
    quote:
      " The room should never allow the eye to settle in one place. it should smile at you and create fantasy",
    author: "Juan Montaya",
    images: getImages("bed"),
  },
  {
    key: "bath-room",
    room: "Bath Room",
    quote: " Beauty begin the moment you decide to be yourself",
    author: "Coco Chanel",
    images: getImages("bathroom"),
  },
  {
    key: "walkin-closet",
    room: "Walk In Closet",
    quote:
      "Opening up your closet should be like arriving at a really good party where everyone you see is someone you like",
    author: "Amy Fine Collins",
    images: getImages("walkin"),
  },
];

export const services = [
  {
    title: "Design",
    desc: `Just like our design philosophy, we also follow a client profiling practice. The reason for this is so that we
      are able to understand the needs and requirements of the client before we begin any sort of ground
      work. That's why we are known for building a strong and personalized bond with every single client, from
      the design stage, through execution and right till completion.`,
    imgSrc: imgs.pic1,
  },
  {
    title: "Execution",
    desc: `Just like our design philosophy, we also follow a client profiling practice. The reason for this is so that we
      are able to understand the needs and requirements of the client before we begin any sort of ground
      work. That's why we are known for building a strong and personalized bond with every single client, from
      the design stage, through execution and right till completion.`,
    imgSrc: imgs.pic2,
  },

  {
    title: "Stylizing",
    desc: `Just like our design philosophy, we also follow a client profiling practice. The reason for this is so that we
      are able to understand the needs and requirements of the client before we begin any sort of ground
      work. That's why we are known for building a strong and personalized bond with every single client, from
      the design stage, through execution and right till completion.`,
    imgSrc: imgs.pic3,
  },
  {
    title: "Delivery",
    desc: `Just like our design philosophy, we also follow a client profiling practice. The reason for this is so that we
      are able to understand the needs and requirements of the client before we begin any sort of ground
      work. That's why we are known for building a strong and personalized bond with every single client, from
      the design stage, through execution and right till completion.`,
    imgSrc: imgs.pic4,
  },
  {
    title: "Customization",
    desc: `Just like our design philosophy, we also follow a client profiling practice. The reason for this is so that we
      are able to understand the needs and requirements of the client before we begin any sort of ground
      work. That's why we are known for building a strong and personalized bond with every single client, from
      the design stage, through execution and right till completion.`,
    imgSrc: imgs.pic5,
  },
];

export const testimonials = [
  {
    title: "Lorem Ipsum",
    desc: `Magna labore culpa sint amet et voluptate sunt ullamco incididunt
    mollit. Fugiat enim esse culpa eiusmod excepteur eiusmod sit
    laborum excepteur.`,
    img: "",
  },
  {
    title: "Lorem Ipsum",
    desc: `Magna labore culpa sint amet et voluptate sunt ullamco incididunt
    mollit. Fugiat enim esse culpa eiusmod excepteur eiusmod sit
    laborum excepteur.`,
    img: "",
  },
];

export const projectTypes = [
  "Residential",
  "Hospitality",
  "Development",
  "Retail",
];

export const team = [
  {
    name: "Sachii Bharatt",
    role: "Founder & Managing Director",
    profile_image: teamUrls.founder,
    summary: `Originally graduating with a BSc degree in IT from Dehradun, Sachii has a distinct flair for interior design
    with an extremely discerning eye for colors and hues. After completing quite a few projects for her family
    & friends in Dehradun, her talent and skills brought her all the way to Bangalore. She then obtained an
    MBA in finance & marketing while continuing to do interior design projects on the side. But fundamentally
    hailing from a business family and the youngest among 4 daughters of an extremely self-reliant and self-
    made father, Sachii decided to strike it out on her own. Thus, came about the birth of Gruham Ti'Amore.`,
  },
  {
    name: "Amresh Anand",
    role: "Director, Technical Operations",
    profile_image: teamUrls.technical,
    summary: `Hailing from Bihar, and a software engineer by profession, Amresh began his journey in the world of
    interior design by assisting Sachii in the digital design development, technical & executional aspects of
    the company. Amresh is usually the go to person for design issues, operational feasibility & procedure of
    the project. His exposure to, and expertise with various software development and programs play a great
    deal in his role here at Gruham Ti'Amore. (for user experience and interactive design).`,
  },
  {
    name: "Nikita Srilekha L",
    role: "Lead Designer",
    profile_image: teamUrls.lead,
    summary: `Basically from Bangalore, Srilekha holds a Bachelor’s degree in Architecture, and has completed various
    projects of different scales across the city. Her versatility and eye for detail is what brought her to
    Gruham Ti'Amore, along with her unique ability to design an impressive space where the aesthetics and
    functionality are balanced perfectly for a project. She can bring new ideas and innovative solutions as
    per a client's style and requirements.`,
  },
];
