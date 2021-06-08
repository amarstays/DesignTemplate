import { Dispatch, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Modal,
  Typography,
} from "@material-ui/core";
import Header from "../../../Components/Header/Header";
import { client } from "../../../utils/api.config";
import { DesignerCard } from "../../../Components/Carousel/CarouselDisplay";
import FormGenerator from "../FormGenerator";
import { designerForm } from "./DesignerMetadata";
import { getAuthToken } from "../../../utils/methods";
import UserManager from "../../../Components/User/UserManager";
import { roles } from "../../../utils/actions";

type mutationType = "designer" | "siteadmin" | false;

interface SiteAdminProps {
  setMessage: Dispatch<any>;
}

const SiteAdmin = ({ setMessage }: SiteAdminProps) => {
  const [designers, setDesigners] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState<mutationType>(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    client.get("/designer/getAll").then((res) => {
      setDesigners(res.data.designers);
    });
  }, []);

  const getFormData = (data: any) => {
    setFormData(data);
  };

  const handleAddDesigner = () => {
    client
      .post("/designer/add", formData, {
        headers: {
          Authorization: getAuthToken(),
        },
      })
      .then((res) => {
        setMessage({
          open: true,
          msg: "Refresh to see the new designer",
          severity: "success",
        });
      });
  };

  return (
    <div>
      <Header />
      <Box className="title-container">
        <Typography variant="h3" className="title-co">
          Site Admin
        </Typography>
        <Box className="column">
          <Button onClick={() => setOpenModal("siteadmin")}>
            Manage site admins
          </Button>
          <Button onClick={() => setOpenModal("designer")}>
            Add a new designer
          </Button>
        </Box>
      </Box>
      <Divider variant="middle" />
      <Grid container>
        {designers.map((designer: any, index: number) => (
          <Grid item xs={12} md={4}>
            <DesignerCard
              designer={designer}
              key={index}
              admin
              setMessage={setMessage}
            />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={Boolean(openModal)}
        onClose={() => setOpenModal(false)}
        className="modal-parent"
      >
        {openModal === "siteadmin" ? (
          <UserManager roles={roles.SITE_ADMIN} />
        ) : (
          <Card>
            <CardHeader title="Add Designer" />
            <CardContent>
              <FormGenerator
                metadata={designerForm}
                getFormData={getFormData}
              />
            </CardContent>
            <CardActions>
              <Button onClick={handleAddDesigner}>Add</Button>
            </CardActions>
          </Card>
        )}
      </Modal>
    </div>
  );
};

export default SiteAdmin;
