import Header from "../Components/Header/Header";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import "./styles/Enquire.css";
import { projectTypes } from "../utils/constants";
import { useEffect, useState } from "react";
import { getUser } from "../utils/methods";
import { client } from "../utils/api.config";

interface enquireProps {
  name?: string;
  email?: string;
  phone?: number;
  project?: string;
  message?: string;
}

const Enquire = () => {
  const [formData, setFormData] = useState<enquireProps>();

  useEffect(() => {
    const user = getUser();
    if (user)
      setFormData({
        name: user.name,
        email: user.email,
      });
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    await client.post("/customer/enquire", formData);
  };

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
            <TextField
              type="text"
              name="name"
              variant="outlined"
              inputProps={{
                autocomplete: "off",
              }}
              value={formData?.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <FormLabel className="form-label">Email</FormLabel>
            <TextField
              type="email"
              name="email"
              variant="outlined"
              value={formData?.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <FormLabel className="form-label">Number</FormLabel>
            <TextField
              type="text"
              name="phone"
              variant="outlined"
              value={formData?.phone}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <FormLabel className="form-label">Project Type</FormLabel>
            <TextField
              select
              variant="outlined"
              placeholder=" Select Project Type"
              name="project_type"
              value={formData?.message}
              onChange={handleChange}
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
              value={formData?.message}
              onChange={handleChange}
            />
          </FormControl>
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Enquire;
