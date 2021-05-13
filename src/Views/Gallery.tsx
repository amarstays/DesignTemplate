import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { logos } from "../assets/urls";
import Header from "../Components/Header/Header";
import { rooms } from "../utils/constants";
import "./styles/Porfolio.css";

const Gallery = () => {
  const [room, setRoom] = useState<any>(rooms);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [room]);

  if (room.length === rooms.length)
    return (
      <div>
        <Header />
        <Box className="title-container">
          <Typography variant="h3" className="title-co">
            Gallery
          </Typography>
          <Box className="desc-co">
            <Typography>
              <i>
                "Great things are not done by one person. They're done by a team
                of people".{" "}
              </i>
              <br />
              <br />- Steve jobs
            </Typography>
          </Box>
        </Box>
        <Divider variant="middle" />
        <Grid container className="image-grid">
          {room?.map((item: any, index: number) => {
            return (
              <Grid item xs={12} md={6} key={index}>
                <Fade>
                  <Box className="port-img-parent">
                    <img src={item.images[0]} alt="bg-port" className="image" />
                    <Box className="room-txt">
                      <Paper elevation={2} className="hover-paper">
                        <Button
                          variant="outlined"
                          color="secondary"
                          size="large"
                          onClick={() =>
                            setRoom(
                              rooms.filter((room) => room.key === item.key)
                            )
                          }
                        >
                          {item.room}
                        </Button>
                      </Paper>
                    </Box>
                  </Box>
                </Fade>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );

  return (
    <div>
      <Header />
      <Fade>
        <Box className="title-container">
          <Typography variant="h3" className="title-co">
            {room?.[0]?.room}
          </Typography>
          <Box className="desc-co">
            <Typography>
              <i>{room?.[0]?.quote}</i>
              <br />
              <br />- {room?.[0]?.author}
            </Typography>
          </Box>
        </Box>
      </Fade>
      <Divider variant="middle" />
      <Grid container className="image-grid">
        {room?.map((item: any, index: number) => {
          return (
            <Grid item xs={12} key={index}>
              <Grid container>
                {item.images.map((img: any, i: number) => (
                  <Grid key={i} item xs={12} md={6} className="grid-item">
                    <Fade>
                      <Box className="port-img-parent">
                        <img src={img} alt="bg-port" className="image" />
                        <img
                          src={logos.trans}
                          alt="turq-logo"
                          className="thumbnail-logo"
                        />
                      </Box>
                    </Fade>
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
