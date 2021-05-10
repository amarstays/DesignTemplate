import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import Header from "../Components/Header/Header";
import { Rating } from "@material-ui/lab";
import { testimonials } from "../utils/constants";
import { Fade } from "react-awesome-reveal";
import "./styles/Testimonials.css";
import { useRef, useState } from "react";
import { client } from "../utils/api.config";
import { getAuthToken } from "../utils/methods";

const Testimonials = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const ratingRef = useRef<any>();
  const messageRef = useRef<any>();

  const handleSubmit = () => {
    client.post(
      "/customer/testimonial",
      {
        rating: ratingRef.current.value,
        message: messageRef.current.value,
      },
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      }
    );
  };

  return (
    <div>
      <Header />
      <Box className="title-container">
        <Typography variant="h3" className="title-co">
          Testimonials
        </Typography>
        <Button onClick={() => setOpenModal(true)}>Give us feedback</Button>
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
                    subheader={<Rating value={4.0} />}
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
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        className="testimonial-modal"
      >
        <Card>
          <CardHeader title="How did we do?" />
          <CardContent>
            <form className="testimonial-form">
              <Box className="rating-parent">
                <Typography>Rating</Typography>
                <Rating
                  className="rating-control"
                  onChange={(e: any, value: any) => {
                    ratingRef.current = {};
                    ratingRef.current.value = value;
                  }}
                />
              </Box>
              <TextField
                label="Message"
                name="details"
                variant="outlined"
                placeholder="Leave us a message"
                inputRef={messageRef}
                multiline
                rows={4}
              />
            </form>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </CardActions>
        </Card>
      </Modal>
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
