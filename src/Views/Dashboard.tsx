import { Dispatch } from "react";
import Header from "../Components/Header/Header";
import {
  Box,
  Divider,
  Card,
  Typography,
  CardContent,
  CardHeader,
  CardActions,
  Grid,
} from "@material-ui/core";
import { validateRoles } from "../utils/methods";
import { useHistory } from "react-router";
import "./styles/Dashboard.css";

interface DashboardProps {
  setMessage: Dispatch<any>;
}

const Dashboard = ({ setMessage }: DashboardProps) => {
  const history = useHistory();

  return (
    <div>
      <Header />
      <Box className="title-container">
        <Typography variant="h3" className="title-co">
          Dashboard
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Grid container style={{ padding: "20px" }}>
        {validateRoles(["siteadmin", "superadmin"]) && (
          <Grid item xs={12} md={4}>
            <Card
              onClick={() => history.push("/site-admin")}
              className="dash-card"
            >
              <CardActions className="column">
                <CardHeader title="Site Admin" className="dash-card-header" />
                <CardContent>
                  <Typography>Add & remove designers.</Typography>
                </CardContent>
              </CardActions>
            </Card>
          </Grid>
        )}
        {validateRoles(["superadmin", "sales"]) && (
          <Grid item xs={12} md={4}>
            <Card
              onClick={() => history.push("/sales-dash")}
              className="dash-card"
            >
              <CardActions className="column">
                <CardHeader
                  title="Sales Dashboard"
                  className="dash-card-header"
                />
                <CardContent>
                  <Typography>Add & manage leads</Typography>
                </CardContent>
              </CardActions>
            </Card>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Dashboard;
