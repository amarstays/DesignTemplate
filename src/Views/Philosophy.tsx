import { Box, Divider, Typography } from "@material-ui/core";
import Header from "../Components/Header/Header";
import Quote from "../Components/Quote/Quote";
import Section from "../Components/Section/Section";
import "./styles/Philosophy.css";

const Philosophy = () => {
  return (
    <div>
      <Header />
      <Box className="title-container">
        <Typography variant="h3" className="title-co">
          Philosophy
        </Typography>
        <Typography paragraph className="desc-co">
          OUR DESIGN PHILOSOPHY IS SIMPLE: INTERIORS MATTER. THEY MATTER BECAUSE
          THEY INFLUENCE HOW WE FEEL, HOW WE ACT AND HOW WE LIVE, OFTEN WITHOUT
          US REALISING IT.{" "}
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Section
        title="Interiors Matter"
        desc="Our behaviours are constantly evolving and, these days, we spend around 90% of our lives indoors: in homes, where families evolve; in restaurants, where grand romances begin; in schools, where growing minds are nurtured; and in offices, where we work towards our dreams. 
        These, and many more, are the backdrops to life’s most memorable moments and each one has a significant impact on us, some without us even realising. And, so, we create interiors that matter—the kind of interiors that are worthy of life’s memorable moments."
        align="left"
        imgSrc="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      />
      <Divider variant="middle" />

      <Quote
        quote="Dolor mollit incididunt aute sunt commodo enim."
        author="lorem ipsum"
      />
      <Divider variant="middle" />
      <Section
        title="MAKING THE ORDINARY EXTRAORDINARY"
        desc="We understand two things very well. We understand interiors and we understand luxury. Interiors because our training and experience have taught us what it takes to create a successful one; and luxury because it’s the very DNA of our brand. 

        By combining the two, we fulfil our ultimate commitment to our clients: to make the ordinary extraordinary. Whether that’s faultless finishes and exquisite exotic materials or the absence of excess and a focus on raw craftsmanship, capturing the extraordinary for our clients is what drives us."
        align="right"
        imgSrc="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      />
      <Divider variant="middle" />
      <Section
        title="DESIGNING WITH CARE"
        desc="We believe the best designers are those who design with empathy; the ones who work hard to understand their client and the project. Designing with empathy requires a careful understanding of each of our clients’ personalities and their needs and wishes for their project. 

        These requirements change from person to person, project to project and country to country—no one size fits all. That’s why we’re proud that our design philosophy embraces a personalised approach; creating interiors that each of our clients can recognise as uniquely theirs.
        
        We regularly use digital technology to work with our clients, near and far, which is why we continually invest in our technology platforms, tools and infrastructure. These tools allow us to work on remote and international projects as naturally as we would local projects, ensuring that we can design your home without you ever having to leave."
        align="left"
        imgSrc="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      />
    </div>
  );
};

export default Philosophy;
