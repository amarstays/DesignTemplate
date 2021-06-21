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
import classnames from "classnames";

interface TableComponentProps {
  metadata: tableMetadata;
  dashboardType: string;
  onRowClick?: any;
}

const TableComponent = ({
  metadata,
  dashboardType,
  onRowClick,
}: TableComponentProps) => {
  const classes = useStyles();
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    client
      .get(`/${dashboardType}/getAll`, {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      })
      .then((res) => {
        setData(res.data[dashboardType]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dashboardType]);

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
              <TableRow
                key={index}
                className={classnames({
                  "table-click-row": Boolean(onRowClick),
                })}
                onClick={() => onRowClick(element)}
              >
                {metadata.columns.map((column: columnsType, key: number) => (
                  <TableCell align="center" key={key}>
                    {column.columnActions?.call ? (
                      <a
                        href={`tel:${element[column.key]}`}
                        className="call-phone"
                      >
                        {element[column.key]}
                      </a>
                    ) : (
                      element[column.key]
                    )}
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
