import { Box, Divider, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./EnquireSection.css";

const EnquireSection = () => {
  return (
    <Box>
      <Divider variant="middle" />
      <Box className="text-section">
        <Typography variant="h6" className="enq-title">
          {" "}
          ENQUIRE
        </Typography>
        <Typography paragraph className="enq-details">
          {" "}
          IF YOU WOULD LIKE TO DISCUSS YOUR PROJECT OR SCHEDULE AN APPOINTMENT
          WITH OUR TEAM, EITHER IN PERSON OR VIRTUALLY, PLEASE{" "}
          <Link to="/enquire" className="link">
            CONTACT US
          </Link>
        </Typography>
      </Box>
      <Divider variant="middle" />
    </Box>
  );
};

export default EnquireSection;
