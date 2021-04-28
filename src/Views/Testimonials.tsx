import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Header from "../Components/Header/Header";
import { Rating } from "@material-ui/lab";
import "./styles/Testimonials.css";
import { testimonials } from "../utils/constants";
import { Fade } from "react-awesome-reveal";

const Testimonials = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Box className="title-container">
        <Typography variant="h3" className="title-co">
          Testimonials
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Grid container>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} key={index} className="review-card-container">
            <Fade>
              <Box display="flex" justifyContent="center">
                <Card elevation={0} className="review-card">
                  <CardHeader
                    avatar={<Avatar className={classes.avatar}>H</Avatar>}
                    title={
                      <Typography variant="h6">{testimonial.title}</Typography>
                    }
                    subheader={<Rating value={4.5} />}
                  />
                  <CardContent>
                    <Typography>{testimonial.desc}</Typography>
                  </CardContent>
                </Card>
              </Box>
            </Fade>
            {index + 1 !== testimonials.length && <Divider variant="middle" />}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Testimonials;

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
