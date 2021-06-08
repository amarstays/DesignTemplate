import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import "./Banner.css";
import { useHistory } from "react-router";
import { Zoom } from "react-awesome-reveal";
import { getAuthToken, getUser } from "../../utils/methods";
import { logos, videoBg } from "../../assets/urls";
import DrawerSection from "../Drawer/Drawer";

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
            <Button color="secondary" onClick={() => history.push("/gallery")}>
              <Typography>Gallery</Typography>
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
            <img
              src={logos.only_logo}
              alt="transparent-logo"
              className="header-logo"
            />
            GRUHAM Ti'AMORE
          </div>
        </Grid>
        <Grid item md={5}>
          <Box className="btn-container">
            <Button color="secondary" onClick={() => history.push("/services")}>
              <Typography>Services</Typography>
            </Button>
            <Button color="secondary" onClick={() => history.push("/team")}>
              <Typography>Team</Typography>
            </Button>

            {/* <Button
              color="secondary"
              onClick={() => history.push("/testimonials")}
            >
              <Typography>Testimonials</Typography>
            </Button> */}
            {!Boolean(getAuthToken()) ? (
              <Button color="secondary" onClick={() => history.push("/login")}>
                <Typography>Login</Typography>
              </Button>
            ) : (
              <Button
                color="secondary"
                onClick={() => {
                  localStorage.clear();
                  history.push("/login");
                }}
              >
                <Typography>Logout</Typography>
              </Button>
            )}
            {getUser() &&
            getUser()[0] &&
            getUser()[0].roles.includes("admin") ? (
              <Button
                color="secondary"
                onClick={() => history.push("/dashboard")}
              >
                <Typography>Dashboard</Typography>
              </Button>
            ) : (
              <Button
                color="secondary"
                onClick={() => history.push("/enquire")}
              >
                <Typography>Enquire</Typography>
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    );
  };

  const getMobileNav = () => {
    return (
      <Grid container>
        <Grid item xs={4}>
          <IconButton onClick={toggleDrawer}>
            <Menu color="secondary" />
          </IconButton>
        </Grid>
        <Grid item xs={8}>
          <div className="logo-container" onClick={() => history.push("/")}>
            <img
              src={logos.only_logo}
              alt="transparent-logo"
              className="header-logo"
            />
            GRUHAM Ti'AMORE
          </div>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <div className="fullscreen">
        <video className="fullscreen-video" loop muted autoPlay>
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="fullscreen-nav">
          <div className={classes.desktop}>{getDesktopNav()}</div>
          <div className={classes.mobile}>{getMobileNav()}</div>
        </div>
        <div className="center-txt">
          <Zoom>
            <img
              src={logos.trans}
              alt="transparent-logo"
              className="center-logo"
            />
          </Zoom>
        </div>
      </div>
      <DrawerSection openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
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
