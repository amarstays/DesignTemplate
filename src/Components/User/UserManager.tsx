import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import { client } from "../../utils/api.config";
import FormGenerator from "../../Views/Dashboard/FormGenerator";
import { addUserMetadata } from "./AddUserMetadata";
import ViewUser from "./ViewUser";
import { getAuthToken } from "../../utils/methods";
import "./User.css";

interface AddUserFormProps {
  roles: string;
}

const UserManager = ({ roles }: AddUserFormProps) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    client
      .get(`/user/getAll/${roles}`, {
        headers: {
          Authorization: getAuthToken(),
        },
      })
      .then((res) => {
        setUsers(res.data.users);
      });
  }, [roles]);

  const getFormData = (formData: any) => {
    setFormData(formData);
  };

  const handleAddUser = async () => {
    setLoading(true);

    await client.post("/user/signup", {
      ...formData,
      roles,
    });

    setLoading(false);
  };

  return (
    <Card>
      <CardHeader title="Add User" />
      <CardContent>
        <FormGenerator metadata={addUserMetadata} getFormData={getFormData} />
        <Divider variant="middle" />
        <Box className="user-list">
          {users.map((user: any, index: number) => (
            <ViewUser user={user} key={index} />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button onClick={handleAddUser} disabled={loading}>
          {loading ? (
            <CircularProgress color="secondary" size="1.2em" />
          ) : (
            "Add"
          )}
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserManager;
