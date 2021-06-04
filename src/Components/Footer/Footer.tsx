import { Box, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import { Email, Phone, Send } from "@material-ui/icons";
import { useRef } from "react";
import { Zoom } from "react-awesome-reveal";
import { logos } from "../../assets/urls";
import { sendEmail } from "../../utils/methods";
import "./Footer.css";

interface FooterProps {
  setMessage: any;
}

const Footer = ({ setMessage }: FooterProps) => {
  const emailRef = useRef<any>();

  const handleSubmit = (e: any) => {
    sendEmail(e, setMessage);
  };

  return (
    <Paper className="footer" elevation={3}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box className="fl-col foo-email">
            <Typography variant="h5">Enter your email</Typography>
            <Box display="flex">
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/mknkrenb"
                method="POST"
              >
                <input
                  name="email"
                  type="text"
                  ref={emailRef}
                  className="foo-email-field"
                />
                <IconButton color="secondary" type="submit">
                  <Send />
                </IconButton>
              </form>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="fl-ce">
            <Zoom>
              <img
                src={logos.zoomed_logo}
                alt="transparent-logo"
                className="foo-logo"
              />
            </Zoom>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="text-ce foo-border-top">
            <Typography variant="h6">
              <b>Terms & conditions</b>
            </Typography>
            <Typography className="foo-detail">Privacy Policy</Typography>
            <Typography className="foo-detail">Copyright</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="text-ce foo-sptop">
            <Typography variant="h6">
              <b>Let's Connect</b>
            </Typography>
            <Typography className="foo-detail">
              <Email />
              &nbsp;
              <a href="mailto:hello@gruhamtiamore.com">
                hello@gruhamtiamore.com
              </a>
            </Typography>
            <Typography className="foo-detail">
              <Phone /> &nbsp;
              <a href="tel:+91 9980149818">+91 9980149818</a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
