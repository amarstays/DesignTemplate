import Header from "../Components/Header/Header";
import { Box, Divider, Grid, Typography } from "@material-ui/core";
import { services } from "../utils/constants";
import "./styles/Service.css";
import { Fade } from "react-awesome-reveal";

const Services = () => {
  return (
    <div>
      <Header />
      <Box className="title-container">
        <Typography variant="h3" className="title-co">
          Services
        </Typography>
        <Typography paragraph className="desc-co">
          CLIENTS ARE OUR ASSETS AND IT IS OUR ENDEVOUR TO MAKE THEIR DREAM HOME
          BECOME A REALITY WITH OUR BEST OF DEDICATED DESIGNERS AND THE
          EXECUTION EXPERTS{" "}
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box className="service-parent">
        <Grid container className="services-container">
          {services.map((service, index) => (
            <Grid key={index} item xs={12} md={6} className="grid-item-ser">
              <img src={service.imgSrc} alt="service" className="service-img" />
              <Fade>
                <Box className="services-text-container">
                  <Typography className="service-title">
                    <b>{service.title}</b>
                  </Typography>
                  <Typography className="service-desc" paragraph>
                    {service.desc}
                  </Typography>
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Services;
