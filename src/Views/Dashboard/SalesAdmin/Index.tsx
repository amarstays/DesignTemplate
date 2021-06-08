import { Dispatch, useState } from "react";
import Header from "../../../Components/Header/Header";
import {
  Box,
  Typography,
  Button,
  Modal,
  Divider,
  Card,
  CardContent,
  CardHeader,
  CardActions,
} from "@material-ui/core";
import UserManager from "../../../Components/User/UserManager";
import TableComponent from "../../../Components/TableComponent/TableComponent";
import { leadForm, salesGridView } from "./metadata";
import FormGenerator from "../FormGenerator";
import { client } from "../../../utils/api.config";
import { validateRoles } from "../../../utils/methods";
import { roles } from "../../../utils/actions";

type openModalTypes = "executive" | "customer" | false;

interface SalesDashboardProps {
  setMessage: Dispatch<any>;
}

const SalesDashboard = ({ setMessage }: SalesDashboardProps) => {
  const [openModal, setOpenModal] = useState<openModalTypes>(false);
  const [formData, setFormData] = useState<any>();

  const getFormData = (data: any) => {
    setFormData(data);
  };

  const handleSubmit = (e: any) => {
    client.post("/customer/enquire", formData).then((res) => {
      setMessage({
        open: true,
        msg: "Refresh to see the changes",
        severity: "success",
      });
    });
  };

  return (
    <div>
      <Header />
      <Box className="title-container">
        <Typography variant="h3" className="title-co">
          Sales & Leads
        </Typography>
        <Box className="column">
          {validateRoles([roles.SUPER_ADMIN]) && (
            <Button onClick={() => setOpenModal("executive")}>
              Manage Sales Executives
            </Button>
          )}
          <Button onClick={() => setOpenModal("customer")}>
            Add a new lead
          </Button>
        </Box>
      </Box>
      <Divider variant="middle" />
      <TableComponent metadata={salesGridView} dashboardType="customer" />
      <Modal
        open={Boolean(openModal)}
        onClose={() => setOpenModal(false)}
        className="modal-parent"
      >
        {openModal === "executive" ? (
          <UserManager roles={roles.SALES} />
        ) : (
          <Card>
            <CardHeader title="Add lead" />
            <CardContent>
              <FormGenerator metadata={leadForm} getFormData={getFormData} />
            </CardContent>
            <CardActions>
              <Button onClick={handleSubmit}>Add</Button>
            </CardActions>
          </Card>
        )}
      </Modal>
    </div>
  );
};

export default SalesDashboard;
