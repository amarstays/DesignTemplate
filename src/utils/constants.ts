import { teamUrls, imgs } from "../assets/urls";
import { getImages } from "./methods";

export const navOptions = ["Philosophy", "Services", "Team", "Gallery"];

export const designerDetails = [
  {
    name: "Shagufta",
    designation: "Designer",
    profile: teamUrls.shagufta,
    details: `Based in Delhi, very energetic and passionate about interiors. She defines designing is love and her design statememt says it all. `,
  },
  {
    name: "Sunil Nibbulal Vishwakarma",
    designation: "Designer",
    profile: teamUrls.sunil,
    details: `Based in Mumbai. Experienced Interior Designer with a demonstrated history of working in the architecture and planning Industry. `,
  },
  {
    name: "Nidhi Mehta",
    designation: "Designer",
    profile: teamUrls.nidhi,
    details: `Based in Mumbai. Creative Interior Design with a strong background in project management, space planning, and computer-aided design, seeking to take next career step with a respected design firm focused on creating world-class hospitality and living spaces. `,
  },
  {
    name: "Simran Lunkad",
    designation: "Designer",
    profile: teamUrls.simran,
    details: `Based in Bangalore. An interior designer trying to decorate the beauty of houses and Making it a HOME. `,
  },
  {
    name: "Prachi",
    designation: "Designer",
    profile: teamUrls.prachi,
    details: `Based in Bhopal. Pliable designer executes to bring unique and passionate perspective & athletic design.
    Professional at measuring & planning designing details, examine & enhance asthetic & developing plans. 
    `,
  },
  {
    name: "Mohd Furquan",
    designation: "Designer",
    profile: teamUrls.furquan,
    details: `Based in New Delhi. Worked on interior design, architectural design.
    Worked on air comfort planning in a house for RENSON Inc UK based company.
    Large Basements and Parking 3D Designing for Air Comfort and Flow Analysis. 
    `,
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
    desc: `The first step to what you finally see as your HOME begins here. And the most important aspect
    of this step is YOU. We strive to incorporate your uniqueness, your image and your inimitable style into
    your living spaces.`,
    imgSrc: imgs.pic1,
  },
  {
    title: "Execution",
    desc: `From the first wood being placed, the first coat of paint being laid on the building, we ensure
    that quality is paramount. Every component is lovingly crafted by sourcing the best materials available at
    our disposal.`,
    imgSrc: imgs.pic2,
  },
  {
    title: "Delivery",
    desc: `We drive and pride ourselves on delivering the finished product to you on or (preferably)
    before the promised timelines. So that you aren't left just dreaming about your dream home, you actually
    begin living in your dream home.`,
    imgSrc: imgs.pic4,
  },
  {
    title: "Stylizing",
    desc: `- Interiors aren't complete without the right dose of stylistic components. From artifacts to
    stylistic bric-a-brac, we can source it all for you. Whether your house demands a classic, retro, modern or
    simply a unique touch, we can fulfil it. If the markets don't have it, our aritsans will create it especially for
    you.`,
    imgSrc: imgs.pic3,
  },
  {
    title: "Architectural",
    desc: `The capabilities of our team in taking just a client's vision and turning it
    into a real structure are simply unparalleled. Whether it's a simple studio apartment, a 2 bedroom-hall-
    kitchen residence or a full-fledged duplex house, we can handle it along with our architectural
    collaborators who are extremely specialized and phenomenally talented at what they do.`,
    imgSrc: imgs.pic6,
  },
  {
    title: "Customization",
    desc: `This is an area of interior design where many have tried, but missed the mark by miles.
    Not because they lack the capability or resources. But simply because they lack the one important
    aspect. CREATIVITY. Our team of designers come from different schools of thought and hence are able
    to transform your dreams and visions into actual and practical works of art. Masterpieces, if we may say
    so ourselves.`,
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
    role: "Co-Founder | Director, Technical Operations",
    profile_image: teamUrls.technical,
    summary: `Hailing from Bihar, and a software engineer by profession, Amresh began his journey in the world of
    interior design by assisting Sachii in the digital design development, technical & executional aspects of
    the company. Amresh is usually the go to person for design issues, operational feasibility & procedure of
    the project. His exposure to, and expertise with various software development and programs play a great
    deal in his role here at Gruham Ti'Amore. (for user experience and interactive design).`,
  },
];
