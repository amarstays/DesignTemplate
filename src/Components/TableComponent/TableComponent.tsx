import { useState, useEffect } from "react";
import {
  Box,
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  makeStyles,
} from "@material-ui/core";
import { client } from "../../utils/api.config";
import { getAuthToken } from "../../utils/methods";
import { columnsType, tableMetadata } from "./columnTypes";

interface TableComponentProps {
  metadata: tableMetadata;
  dashboardType: string;
}

const TableComponent = ({ metadata, dashboardType }: TableComponentProps) => {
  const classes = useStyles();
  const [formData, setFormData] = useState<any>({});
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    client
      .get(`/${dashboardType}/getAll`, {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      })
      .then((data) => {
        setData(data.data[dashboardType]);
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
  }, [dashboardType]);

  // const handleChange = (id: number, name: string, value: any) => {
  //   setFormData({
  //     ...formData,
  //     [id]: {
  //       ...formData[id],
  //       [name]: value,
  //     },
  //   });
  // };

  // const handleSubmit = (id: number) => {
  //   const payload: any = {
  //     status: formData[id].status,
  //     assigned_to: formData[id].assigned_to,
  //   };

  //   Object.keys(payload).forEach((key: string) => {
  //     if (payload[key] === undefined) delete payload[key];
  //   });

  //   client.put(`/customer/update/${id}`, payload, {
  //     headers: {
  //       Authorization: `Bearer ${getAuthToken()}`,
  //     },
  //   });
  // };

  return (
    <Box className="table-parent">
      <TableContainer component={Paper} className="table-container">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {metadata.columns.map((column: columnsType, index: number) => (
                <TableCell
                  key={index}
                  className={classes.header}
                  align="center"
                >
                  {column.header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((element: any, index: number) => (
              <TableRow key={index}>
                {metadata.columns.map((column: columnsType, key: number) => (
                  <TableCell align="center" key={key}>
                    {element[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableComponent;

const useStyles = makeStyles((theme) => ({
  header: {
    background: theme.palette.primary.main,
    color: "white",
  },
}));
