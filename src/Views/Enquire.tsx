import Header from "../Components/Header/Header";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import "./styles/Enquire.css";
import { projectTypes } from "../utils/constants";

const Enquire = () => {
  return (
    <div>
      <Header />
      <Box className="title-container">
        <Typography variant="h3" className="title-co">
          Enquire
        </Typography>
        <Typography paragraph className="desc-co">
          WE LOVE HELPING OUR CLIENTS CREATE BEAUTIFUL INTERIORS AND WE'RE LUCKY
          ENOUGH TO WORK ON LARGE AND SMALL-SCALE PROJECTS ALL OVER THE WORLD.
          LET’S DISCUSS HOW WE CAN HELP YOU WITH YOURS.
          <br />
          <br />
          Get in touch with us on <b>+44 20 3322 8665</b> or contact us below.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box className="enquire-form-container">
        <form className="enquire-form">
          <FormControl margin="normal" fullWidth>
            <FormLabel className="form-label">Name</FormLabel>
            <TextField type="text" name="name" variant="outlined" />
          </FormControl>
          <Box className="field-join">
            <FormControl className="form-control-mr">
              <FormLabel className="form-label">Email</FormLabel>
              <TextField type="email" name="email" variant="outlined" />
            </FormControl>
            <FormControl>
              <FormLabel className="form-label">Number</FormLabel>
              <TextField type="number" name="phone" variant="outlined" />
            </FormControl>
          </Box>
          <FormControl margin="normal" fullWidth>
            <FormLabel className="form-label">Project Type</FormLabel>
            <TextField
              select
              variant="outlined"
              placeholder=" Select Project Type"
            >
              {projectTypes.map((type, index) => (
                <MenuItem key={index} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <FormLabel className="form-label">Message</FormLabel>
            <TextField
              type="text"
              name="message"
              variant="outlined"
              multiline
              rows={4}
            />
          </FormControl>
        </form>
      </Box>
    </div>
  );
};

export default Enquire;
