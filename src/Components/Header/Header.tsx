import { useState } from "react";
import {
  makeStyles,
  Grid,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import { navOptions } from "../../utils/constants";
import "./Header.css";
import { useHistory } from "react-router";

const Header = () => {
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
              <Typography className="nav-item">Gallery</Typography>
            </Button>
            <Button color="secondary" onClick={() => history.push("/services")}>
              <Typography className="nav-item">Services</Typography>
            </Button>
            <Button
              color="secondary"
              onClick={() => history.push("/philosophy")}
            >
              <Typography className="nav-item">Philosophy</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item md={2}>
          <div className="logo-med" onClick={() => history.push("/")}>
            Logo
          </div>
        </Grid>
        <Grid item md={5}>
          <Box className="btn-container">
            <Button color="secondary" onClick={() => history.push("/team")}>
              <Typography className="nav-item">Team</Typography>
            </Button>
            <Button
              color="secondary"
              onClick={() => history.push("/testimonials")}
            >
              <Typography className="nav-item">Testimonials</Typography>
            </Button>
            <Button color="secondary" onClick={() => history.push("/enquire")}>
              <Typography className="nav-item">Enquire</Typography>
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
            <Menu color="primary" />
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          <div
            className="logo-med align-right"
            onClick={() => history.push("/")}
          >
            Logo
          </div>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <div>
        <div className={classes.desktop}>{getDesktopNav()}</div>
        <div className={classes.mobile}>{getMobileNav()}</div>
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

export default Header;

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
