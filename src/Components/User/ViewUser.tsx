import { IconButton, Typography } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import { client } from "../../utils/api.config";
import { getAuthToken } from "../../utils/methods";

interface ViewUserProps {
  user: any;
}

const ViewUser = ({ user }: ViewUserProps) => {
  const handleDeleteUser = () => {
    client
      .delete(`/user/delete/${user.id}`, {
        headers: {
          Authorization: getAuthToken(),
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="view-user-container">
      <Typography paragraph>
        <b>Name: </b> {user.name}
        <br />
        <b>Email: </b> {user.email}
      </Typography>
      <IconButton onClick={handleDeleteUser}>
        <Delete style={{ color: "red" }} />
      </IconButton>
    </div>
  );
};

export default ViewUser;
