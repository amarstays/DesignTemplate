import { Box, Divider, Grid, Typography } from "@material-ui/core";
import Header from "../Components/Header/Header";
import { portfolio } from "../utils/constants";
import "./styles/Porfolio.css";

const Gallery = () => {
  return (
    <div>
      <Header />
      <Box className="title-container">
        <Typography variant="h3" className="title-co">
          Gallery
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Grid container className="image-grid">
        {portfolio.map((item) => (
          <Grid item xs={12} md={item.major ? 12 : 4} className="grid-item">
            <img src={item.src} alt="bg-port" className="image" />
            <Box className="portfolio-txt-item">
              <Typography className="portfolio-title">{item.title}</Typography>
              <Typography className="portfolio-desc">{item.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Gallery;
