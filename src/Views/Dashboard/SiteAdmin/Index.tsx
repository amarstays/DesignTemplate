import { useEffect, useState } from "react";
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

type mutationType = "designer" | false;

const SiteAdmin = () => {
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

  return (
    <div>
      <Header />
      <Box className="title-container">
        <Typography variant="h3" className="title-co">
          Site Admin
        </Typography>
        <Button onClick={() => setOpenModal("designer")}>
          Add a new designer
        </Button>
      </Box>
      <Divider variant="middle" />
      <Grid container>
        {designers.map((designer: any, index: number) => (
          <Grid item xs={12} md={4}>
            <DesignerCard designer={designer} key={index} />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={Boolean(openModal)}
        onClose={() => setOpenModal(false)}
        className="modal-parent"
      >
        <Card>
          <CardHeader title="Add Designer" />
          <CardContent>
            <FormGenerator metadata={designerForm} getFormData={getFormData} />
          </CardContent>
          <CardActions>
            <Button>Add</Button>
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
};

export default SiteAdmin;
