import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import "./Banner.css";
import { navOptions } from "../../utils/constants";
import { useHistory } from "react-router";
import { Zoom } from "react-awesome-reveal";

const Banner = () => {
  const classes = useStyles();
  const history = useHistory();
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const getDesktopNav = () => {
    return (
      <Grid container>
        <Grid item md={5}>
          <Box className="btn-container">
            <Button color="secondary" onClick={() => history.push("/enquire")}>
              <Typography>Enquire</Typography>
            </Button>
            <Button color="secondary" onClick={() => history.push("/services")}>
              <Typography>Services</Typography>
            </Button>
            <Button
              color="secondary"
              onClick={() => history.push("/philosophy")}
            >
              <Typography>Philosophy</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item md={2}>
          <div className="logo-container" onClick={() => history.push("/")}>
            GRUHAM Ti'AMORE
          </div>
        </Grid>
        <Grid item md={5}>
          <Box className="btn-container">
            <Button color="secondary" onClick={() => history.push("/team")}>
              <Typography>Team</Typography>
            </Button>
            <Button
              color="secondary"
              onClick={() => history.push("/testimonials")}
            >
              <Typography>Testimonials</Typography>
            </Button>
            <Button color="secondary" onClick={() => history.push("/login")}>
              <Typography>Login</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    );
  };

  const getMobileNav = () => {
    return (
      <Grid container>
        <Grid item xs={6}>
          <IconButton onClick={toggleDrawer}>
            <Menu color="secondary" />
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          <div className="logo-container align-right">Logo</div>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <div className="fullscreen">
        {/* <iframe
        title="gif"
        src="https://giphy.com/embed/IWsz1enyrhjBm"
        frameBorder="0"
        allowFullScreen
      /> */}
        <div className="fullscreen-nav">
          <div className={classes.desktop}>{getDesktopNav()}</div>
          <div className={classes.mobile}>{getMobileNav()}</div>
        </div>
        <div className="center-txt">
          <Zoom>
            <Typography variant="h3" className="heading">
              <b>GRUHAM Ti'AMORE</b>
            </Typography>
          </Zoom>
        </div>
      </div>
      <Drawer anchor="top" open={openDrawer} onClose={toggleDrawer}>
        <List>
          {navOptions.map((text, index) => (
            <ListItem button key={index}>
              <ListItemText
                primary={
                  <Typography className="text-center">{text}</Typography>
                }
                onClick={() => history.push(`/${text.toLowerCase()}`)}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Banner;

const useStyles = makeStyles((theme) => ({
  mobile: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  desktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));
