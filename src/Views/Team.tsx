import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { Fade } from "react-awesome-reveal";
import { logos } from "../assets/urls";
import Header from "../Components/Header/Header";
import { team } from "../utils/constants";
import "./styles/Team.css";

const Team = () => {
  return (
    <div>
      <Header />
      <Box className="title-container">
        <Typography variant="h3" className="title-co">
          Team
        </Typography>
        <Typography paragraph className="desc-co">
          TEAM IS THE BASIC FRAMEWORK OF HOW YOU STRUCTURE YOUR BUSINESS.
          <br />
          THE  RIGHT TEAM SHARES THE SAME VISION AND CHALLENGES EACH OTHER TO
          MAKE IT BETTER IN DUE COURSE OF TIME.
          <br />
          WE AT GRUHAM TI AMORE ARE A GROUP OF PEOPLE BOUND BY OUR INHERENT
          COMPASSION TO DREAM AND DESIGN OUR DREAMS INTO A FUNCTIONAL REALITY.
          <br />
          TO US DESIGNING IS NOT A TEDIOUS JOB BUT OUR PASSION THAT WE INDULGE
          IN WITH OUR HEART AND SOUL.{" "}
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Grid container className="team-container">
        {team.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Fade>
              <Card className="team-card" elevation={3}>
                <Box className="team-profile-img-container">
                  <CardMedia
                    image={item.profile_image}
                    className="team-profile-img"
                  />
                  <img
                    src={logos.trans}
                    alt="logo-trans"
                    className="team-logo-trans"
                  />
                </Box>
                <Box>
                  <CardHeader
                    title={
                      <Typography variant="h5" className="member-name">
                        {item.name}
                      </Typography>
                    }
                    subheader={
                      <Typography
                        style={{ color: "white" }}
                        className="member-role"
                      >
                        {item.role}
                      </Typography>
                    }
                    className="team-card-header"
                  />
                  <CardContent>
                    <Typography paragraph className="member-summary">
                      {item.summary}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Team;
