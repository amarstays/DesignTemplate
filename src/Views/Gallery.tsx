import { Box, Divider, Grid, Paper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { designerDetails } from "../utils/constants";
import { DesignerCard } from "../Components/Carousel/CarouselDisplay";
import "./styles/Porfolio.css";

const Gallery = () => {
  const [designer, setDesigner] = useState<any>();

  useEffect(() => {
    const designerKey = window.location.pathname.split("/")[2];
    const temp = designerDetails.filter((des) => des.key === designerKey)[0];

    setDesigner(temp);
  }, []);

  return (
    <div>
      <Header />
      <Box className="title-container">
        <Typography variant="h3" className="title-co">
          Gallery
        </Typography>
        <Box className="desc-co">
          {designer && <DesignerCard designer={designer} summaryCard />}
        </Box>
      </Box>
      <Divider variant="middle" />
      <Grid container className="image-grid">
        {designer?.portfolio.map((item: any, index: number) => {
          return (
            <Grid item xs={12} key={index}>
              <Paper className="port-sec-title" elevation={2}>
                <Typography variant="h5">{item.category}</Typography>
              </Paper>
              <Grid container>
                {item.images.map((img: any, i: number) => (
                  <Grid key={i} item xs={12} md={6} className="grid-item">
                    <img src={img.src} alt="bg-port" className="image" />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Gallery;
