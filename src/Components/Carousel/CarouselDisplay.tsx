import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { useHistory } from "react-router";
import { logos } from "../../assets/urls";
import { designerDetails } from "../../utils/constants";
import "./CarouselDisplay.css";

const CarouselDisplay = () => {
  return (
    <div>
      <Divider variant="middle" />
      <Grid container>
        <Grid item xs={12} md={5}>
          <Box className="desginer-se-det">
            <Typography variant="h6" className="designer-section-title">
              MEET OUR DESIGNERS
            </Typography>
            <br />
            <Typography paragraph className="designer-section-details">
              The great and exquisite design is to capture the spirit of the
              client, as well as the essence of the space and thats what Gruham
              Ti'Amore gives you through it's best of our Designer's to create
              the magic
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Carousel animation="slide" interval={5000} navButtonsAlwaysInvisible>
            {designerDetails.map((designer, i) => (
              <DesignerCard key={i} designer={designer} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </div>
  );
};

interface DesignerCardProps {
  designer: any;
  summaryCard?: boolean;
}

export const DesignerCard = ({ designer, summaryCard }: DesignerCardProps) => {
  const history = useHistory();

  const handleGalleryButtonClick = () => {
    history.push(`/gallery`);
  };

  return (
    <Box className={`designer-card-container${summaryCard ? "-top" : ""}`}>
      <Card elevation={3}>
        <Box className="designer-card">
          <Box className="width-50">
            <CardMedia className="designer-photo" image={designer.profile} />
            <img src={logos.trans} alt="logo" className="carousel-logo" />
          </Box>
          <Box className="designer-details width-50">
            <CardHeader
              style={{ background: "black" }}
              title={
                <Typography variant="h5" className="designer-name">
                  {designer.name}
                </Typography>
              }
              subheader={
                <Typography className="designer-role">
                  {designer.designation}
                </Typography>
              }
            />
            <CardContent>
              <Typography paragraph className="designer-summary">
                {designer.details}
              </Typography>
            </CardContent>
            <CardActions>
              <Box className="designer-actions">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleGalleryButtonClick}
                >
                  GALLERY
                </Button>
              </Box>
            </CardActions>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default CarouselDisplay;
