import { Box, Divider, Typography } from "@material-ui/core";
import Banner from "../Components/Banner/Banner";
import "./styles/Home.css";
import Section from "../Components/Section/Section";

const Home = () => {
  return (
    <div>
      <Banner />
      <Box className="desc-container">
        <Typography paragraph className="para">
          LuxDeco Studio is the interior design studio from the world’s leading
          luxury interiors platform. Based in London and working
          internationally, we are an authority on both luxury and interiors
          committed to making the ordinary extraordinary. Our expertise ranges
          from full-service residential and hospitality projects to product
          sourcing and bespoke furniture design. We provide services for clients
          in person and virtually using best in class digital technology and
          industry tools.
        </Typography>
        <br />
        <Divider variant="middle" />
      </Box>
      <Section
        link="/philosophy"
        title="Our Philosophy"
        desc="Our design philosophy is simple: interiors matter. They influence how we feel, how we act and how we live."
        align="left"
        imgSrc="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      />
      <Divider variant="middle" />
      <Section
        link="/philosophy"
        title="Our Philosophy"
        desc="Our design philosophy is simple: interiors matter. They influence how we feel, how we act and how we live."
        align="right"
        imgSrc="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      />
      <Divider variant="middle" />
      <Section
        link="/philosophy"
        title="Our Philosophy"
        desc="Our design philosophy is simple: interiors matter. They influence how we feel, how we act and how we live."
        align="left"
        imgSrc="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      />
      <Divider variant="middle" />
      <Section
        link="/philosophy"
        title="Our Philosophy"
        desc="Our design philosophy is simple: interiors matter. They influence how we feel, how we act and how we live."
        align="right"
        imgSrc="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      />
    </div>
  );
};

export default Home;
