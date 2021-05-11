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
          SPECIALISTS IN LUXURY INTERIOR DESIGN, OUR TEAM OF DEDICATED DESIGN
          PROFESSIONALS OFFER DECADES OF INTERNATIONAL EXPERIENCE TO OUR ELITE
          CLIENTELE{" "}
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Grid container className="team-container">
        {team.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Fade>
              <Card className="team-card" elevation={3}>
                <CardMedia
                  image={item.profile_image}
                  className="team-profile-img"
                />
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
