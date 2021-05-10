import { Box, Divider, Typography } from "@material-ui/core";
import Banner from "../Components/Banner/Banner";
import "./styles/Home.css";
import Section from "../Components/Section/Section";
import { imgs } from "../assets/urls";

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
        imgSrc={imgs.chef_kitchen}
      />
      <Divider variant="middle" />
      <Section
        link="/services"
        title="Services we offer"
        desc="Clients  are our assets and it is our endevour to make their dream home become a reality with our best of dedicated designers and the Execution Experts."
        align="right"
        imgSrc={imgs.flowers}
      />
      <Divider variant="middle" />
      <Section
        link="/team"
        title="Our team"
        desc="Our design philosophy is simple: interiors matter. They influence how we feel, how we act and how we live."
        align="left"
        imgSrc={imgs.white_kitchen}
      />
      <Divider variant="middle" />
      <Section
        link="/testimonials"
        title="Something from our customers"
        desc="We value your feedback. Here's what our customers have to say!"
        align="right"
        imgSrc={imgs.wooden_living}
      />
    </div>
  );
};

export default Home;
