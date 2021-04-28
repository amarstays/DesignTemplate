import Header from "../Components/Header/Header";
import { Box, Divider, Grid, Typography } from "@material-ui/core";
import { services } from "../utils/constants";
import "./styles/Service.css";

const Services = () => {
  return (
    <div>
      <Header />
      <Box className="title-container">
        <Typography variant="h3" className="title-co">
          Services
        </Typography>
        <Typography paragraph className="desc-co">
          SPECIALISING IN HIGH-END RESIDENTIAL AND HOSPITALITY INTERIOR DESIGN,
          LUXDECO STUDIO’S INTERNATIONAL, MULTI-DISCIPLINARY TEAM COMBINES
          DECADES OF EXPERIENCE TO PROVIDE THE MOST PROFESSIONAL, ENJOYABLE AND
          EFFICIENT DESIGN EXPERIENCE.{" "}
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Grid container className="services-container">
        {services.map((service, index) => (
          <Grid key={index} item xs={12} md={4} className="grid-item-ser">
            <Box className="service-img-container">
              <img src={service.imgSrc} alt="service" className="service-img" />
            </Box>
            <Typography className="service-title">{service.title}</Typography>
            <Typography className="service-desc" paragraph>
              {service.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Services;
