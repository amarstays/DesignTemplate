import { Dispatch, useCallback, useEffect, useState } from "react";
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
import FormGenerator from "../../../Components/FormGenerator";
import { categoryMetadata, memeberForm } from "./DesignerMetadata";
import { getAuthToken } from "../../../utils/methods";
import PortfolioHandler from "../../../Components/Portfolio/PortfolioHandler";
import { TeamCard } from "../../Team";

type mutationType = "designer" | "team" | "portfolio" | false;

interface SiteAdminProps {
  setMessage: Dispatch<any>;
}

const SiteAdmin = ({ setMessage }: SiteAdminProps) => {
  const [designers, setDesigners] = useState<any[]>([]);
  const [team, setTeams] = useState<any[]>([]);
  const [portfolios, setPortfolios] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState<mutationType>(false);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const getDesigners = useCallback(() => {
    client.get("/designer/getAll").then((res) => {
      setDesigners(res.data.designers);
    });

    client.get("/team/getAll").then((res) => {
      setTeams(res.data.team);
    });
  }, []);

  const getPortfolios = useCallback(() => {
    client.get("/portfolio/getAll").then((res) => {
      setPortfolios(res.data.portfolio);
    });
  }, []);

  useEffect(() => {
    getDesigners();
  }, [getDesigners]);

  useEffect(() => {
    getPortfolios();
  }, [getPortfolios]);

  const getFormData = (data: any) => {
    setFormData(data);
  };

  const handleAddMember = () => {
    client
      .post("/designer/add", formData, {
        headers: {
          Authorization: getAuthToken(),
        },
      })
      .then((res) => {
        setOpenModal(false);
        getDesigners();
        setMessage({
          open: true,
          msg: "New designer added",
          severity: "success",
        });
      });
  };

  const handleAddCategory = () => {
    client
      .post("/portfolio/add", formData, {
        headers: {
          Authorization: getAuthToken(),
        },
      })
      .then((res) => {
        setOpenModal(false);
        getPortfolios();
        setMessage({
          open: true,
          msg: "New category added",
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
        <Box className="fl-ce title-button-container">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenModal("team")}
          >
            Add a team member
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenModal("designer")}
          >
            Add a new designer
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenModal("portfolio")}
          >
            Add a new portfolio category
          </Button>
        </Box>
      </Box>
      <Divider variant="middle" />
      <Grid container>
        {designers.map((designer: any, index: number) => (
          <Grid item xs={12} md={4} key={index}>
            <DesignerCard
              designer={designer}
              admin
              setMessage={setMessage}
              refreshData={getDesigners}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container>
        {portfolios.map((portfolio: any, index: number) => (
          <Grid item xs={12} key={index}>
            <PortfolioHandler
              name={portfolio.category}
              id={portfolio.id}
              setMessage={setMessage}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container>
        {team.map((team: any, index: number) => (
          <Grid item xs={12} md={4} key={index}>
            <TeamCard team={team} />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={Boolean(openModal)}
        onClose={() => setOpenModal(false)}
        className="modal-parent"
      >
        <Card>
          <CardHeader
            title={
              openModal === "designer" || openModal === "team"
                ? "Add Member"
                : "Add Category"
            }
          />
          <CardContent className="modal-form-content">
            <FormGenerator
              metadata={
                openModal === "designer" || openModal === "team"
                  ? memeberForm
                  : categoryMetadata
              }
              getFormData={getFormData}
              setLoadingParent={setLoading}
            />
          </CardContent>
          <CardActions>
            <Button
              onClick={
                openModal === "designer" || openModal === "team"
                  ? handleAddMember
                  : handleAddCategory
              }
              disabled={loading}
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
};

export default SiteAdmin;
