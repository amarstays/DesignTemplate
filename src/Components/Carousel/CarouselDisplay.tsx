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
import { designerDetails } from "../../utils/constants";
import "./CarouselDisplay.css";

const CarouselDisplay = () => {
  return (
    <div>
      <Divider variant="middle" />
      <Grid container>
        <Grid item xs={12} md={5}>
          <Box className="desginer-se-det">
            <Typography variant="h6">MEET OUR DESIGNERS</Typography>
            <br />
            <Typography paragraph>
              Ipsum officia eu nisi amet exercitation. Sit nostrud cillum anim
              id ea excepteur sint. Laborum aute ea sit fugiat cupidatat
              consequat minim dolor nostrud nostrud nisi. Veniam nisi et ea non
              irure pariatur eu enim aliquip anim voluptate deserunt ea anim.
              Dolor non pariatur et cupidatat minim ut occaecat dolore ex
              commodo anim non ut adipisicing.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Carousel
            animation="slide"
            interval={10000}
            navButtonsAlwaysInvisible
          >
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

  const handleGalleryButtonClick = (key: string) => {
    history.push(`/gallery/${key}`);
  };

  return (
    <Box className="designer-card-container">
      <Card elevation={3}>
        <Box className="designer-card">
          <Box style={{ width: "50%" }}>
            <CardMedia className="designer-photo" image={designer.profile} />
          </Box>
          <Box className="designer-details">
            <CardHeader
              title={designer.name}
              subheader={designer.designation}
            />
            <CardContent>
              <Typography paragraph>
                {summaryCard ? designer.fullDetails : designer.summary}
              </Typography>
            </CardContent>
            <CardActions>
              <Box className="designer-actions">
                {!summaryCard && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleGalleryButtonClick(designer.key)}
                  >
                    GALLERY
                  </Button>
                )}
              </Box>
            </CardActions>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default CarouselDisplay;
