import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Modal,
  Card,
  Typography,
  CardContent,
  TextField,
  FormControlLabel,
  Checkbox,
  CardHeader,
  CardActions,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  makeStyles,
  MenuItem,
} from "@material-ui/core";
import { getAuthToken, getUser } from "../utils/methods";
import "./styles/Dashboard.css";
import { client } from "../utils/api.config";

const Dashboard = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [customerEnquiries, setCustomerEnquiries] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [modalFormData, setModalFormData] = useState<any>({});
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    client
      .get("/customer/getAll", {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      })
      .then((data) => {
        setCustomerEnquiries(data.data.enquiries);
        const list: any = {};
        data.data.enquiries.forEach((customer: any) => {
          list[customer.id] = {
            status: customer.status,
            assigned_to: customer.assigned_to,
          };
        });
        setFormData(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    client
      .get("/user/getAll/admin", {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      })
      .then((data) => {
        setUsers(data.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (id: number, name: string, value: any) => {
    setFormData({
      ...formData,
      [id]: {
        ...formData[id],
        [name]: value,
      },
    });
  };

  const handleChangeModalForm = (event: any) => {
    setModalFormData({
      ...modalFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (id: number) => {
    const payload: any = {
      status: formData[id].status,
      assigned_to: formData[id].assigned_to,
    };

    Object.keys(payload).forEach((key: string) => {
      if (payload[key] === undefined) delete payload[key];
    });

    client.put(`/customer/update/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
  };

  const handleModalSubmit = () => {
    const payload = {
      email: modalFormData.email,
      roles: !modalFormData.isSuperAdmin
        ? "user,admin"
        : "user,admin,superadmin",
    };
    client.put("/user/updateRole", payload, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
  };

  return (
    <div>
      <Header />
      <Box className="title-container">
        <Typography variant="h3" className="title-co">
          Dashboard
        </Typography>
        {getUser()?.[0]?.roles.includes("superadmin") && (
          <Button onClick={() => setOpenModal(true)}>Add a new admin</Button>
        )}
      </Box>
      <Divider variant="middle" />
      <Box className="table-parent">
        <TableContainer component={Paper} className="table-container">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.header} align="center">
                  Name
                </TableCell>
                <TableCell className={classes.header} align="center">
                  Email
                </TableCell>
                <TableCell className={classes.header} align="center">
                  Phone
                </TableCell>
                <TableCell className={classes.header} align="center">
                  Project
                </TableCell>
                <TableCell className={classes.header} align="center">
                  Message
                </TableCell>
                <TableCell className={classes.header} align="center">
                  Status
                </TableCell>
                <TableCell className={classes.header} align="center">
                  Assigned to
                </TableCell>
                <TableCell className={classes.header} align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerEnquiries.map((customer, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{customer.name}</TableCell>
                  <TableCell align="center">{customer.email}</TableCell>
                  <TableCell align="center">{customer.phone}</TableCell>
                  <TableCell align="center">{customer.project_type}</TableCell>
                  <TableCell align="center">{customer.message}</TableCell>
                  <TableCell align="center">
                    <TextField
                      value={formData[customer.id]?.status}
                      name="status"
                      label="Status"
                      onChange={(e: any) =>
                        handleChange(customer.id, e.target.name, e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <FormControl margin="normal" fullWidth>
                      <TextField
                        select
                        variant="outlined"
                        placeholder="Assigned to"
                        name="assigned_to"
                        value={formData[customer.id]?.assigned_to ?? ""}
                        onChange={(e: any) =>
                          handleChange(
                            customer.id,
                            e.target.name,
                            e.target.value
                          )
                        }
                      >
                        {users.map((user, index) => (
                          <MenuItem key={index} value={user.id}>
                            {user.name}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSubmit(customer.id)}
                    >
                      Submit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        className="dash-modal"
      >
        <Card>
          <CardHeader
            title={<Typography variant="h5">Add a user</Typography>}
            subheader={
              <Typography variant="subtitle2">
                The email should be signed up
              </Typography>
            }
          />
          <Divider variant="middle" />
          <CardContent>
            <form className="add-user-form">
              <FormControl>
                <TextField
                  name="email"
                  label="Email"
                  placeholder="Enter user email"
                  variant="outlined"
                  onChange={handleChangeModalForm}
                  inputProps={{
                    autocomplete: "off",
                  }}
                />
              </FormControl>
              <br />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={modalFormData.isSuperAdmin}
                    onChange={handleChangeModalForm}
                    name="isSuperAdmin"
                    color="primary"
                  />
                }
                label="Is the user a super admin?"
              />
            </form>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={handleModalSubmit}
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
};

export default Dashboard;

const useStyles = makeStyles((theme) => ({
  header: {
    background: theme.palette.primary.main,
    color: "white",
  },
}));
