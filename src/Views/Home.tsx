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
          Gruham Ti'Amore is an interior design studio based in Bangalore. A
          home is where your story begins. We pride ourselves in turning that
          story into an impeccable work of art. Everyone lives in a house. But,
          at Gruham Ti'Amore, an incredible metamorphosis happens. Your "house"
          turns into the "home" of your dreams. We visualize and create
          different styles catering to your discerning tastes and preferences.
          We aim to make you fall in love with your home every time you wake up.
          <br />
          <br />
          <b>
            <i>
              "A home where your feet may leave, but not your heart" - Gruham
              Ti'Amore.
            </i>
          </b>
        </Typography>
        <br />
        <Divider variant="middle" />
      </Box>
      <Section
        link="/philosophy"
        title="Our Philosophy"
        desc="Luxury is not just about being rich
        Luxury is about class
        Luxury is about being comfortable"
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
