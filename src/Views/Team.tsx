import { Box, Divider, Grid, Typography } from "@material-ui/core";
import { Zoom } from "react-awesome-reveal";
import Header from "../Components/Header/Header";
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
          RENOWNED SPECIALISTS IN LUXURY INTERIOR DESIGN, OUR TEAM OF DEDICATED
          DESIGN PROFESSIONALS OFFER DECADES OF INTERNATIONAL EXPERIENCE TO
          LUXDECO STUDIO’S ELITE CLIENTELE{" "}
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Grid container className="team-container">
        <Grid item xs={12}>
          <Zoom>
            <Box className="team-image-container">
              <img
                src="https://images.unsplash.com/photo-1556565681-306458ef93cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="team"
              />
            </Box>
          </Zoom>
        </Grid>
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={5} className="team-para-container">
          <Typography paragraph>
            Drawing on a wealth of knowledge in both residential and hospitality
            design, our team have experience designing luxury spaces and major
            confidential projects for the world’s elite. Highlights include an
            18,000 square foot private luxury apartment development, a large ski
            chalet in Val Thorens, a luxury villa in Cannes, a chateau in Paris
            and an exclusive residential development in Marbella. The team also
            design extensively in London and the home counties; their portfolio
            features many Grade II-listed townhouses and residences. Experienced
            in high-grade hospitality design, the team have designed and managed
            large-scale restaurant and racecourse projects throughout the UK.
            The team’s portfolio history showcases a range of aesthetics and
            capabilities with project styles ranging from transitional to
            traditional and minimalism to contemporary.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} className="team-para-container">
          <Typography paragraph>
            Further to their interior design skills and use of digital
            technology and industry tools, our team’s other services include
            site surveying, virtual design and 3D visualisation, furniture
            design, product sourcing, showhome staging and project management.
            They hold bachelor and postgraduate qualifications from prestigious
            establishments such as KLC, the University of London and University
            of Brighton and awards from SBID. The team’s experience and
            credentials are enhanced by their position at the heart of LuxDeco,
            the world’s leading luxury interiors platform. As such, they have
            preferential access to over 300 designer furniture and decor brands,
            including AERIN, Bernhardt, Eichholtz, Kelly Wearstler and Ralph
            Lauren. They also enjoy successful working relationships with the
            industry’s most experienced collaborators, contractors and
            craftspeople which are important factors in the success of any
            project.
          </Typography>
        </Grid>
        <Grid item xs={12} md={1}></Grid>
      </Grid>
    </div>
  );
};

export default Team;
