import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button,
  makeStyles,
} from "@material-ui/core";
import FormGenerator, { formElement } from "../FormGenerator";

interface FilterProps {
  metadata: formElement[];
  data: any[];
  setData: Dispatch<SetStateAction<any[]>>;
  refetchCallback: () => void;
}

const Filter = ({ metadata, data, setData, refetchCallback }: FilterProps) => {
  const classes = useStyles();
  const [filterData, setFilterData] = useState<any>();

  useEffect(() => {
    const filterKeys = Object.keys(filterData ?? {});
    if (filterKeys.length) {
      var dataToFilter = data.filter((item) => {
        for (var key of filterKeys) {
          if (item[key] === filterData[key]) return true;
        }

        return false;
      });

      setData(() => dataToFilter);
    } else {
      refetchCallback();
    }
  }, [filterData, refetchCallback, setData]);

  const getFilteredData = (data: any) => {
    setFilterData(data);
  };

  const clearFilter = () => {
    setFilterData({});
  };

  return (
    <Card elevation={3} className={classes.root}>
      <CardHeader title="Filter" className={classes.cardHeader} />
      <CardContent className={classes.cardContent}>
        <FormGenerator
          initialData={filterData}
          metadata={metadata}
          getFormData={getFilteredData}
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={clearFilter}>
          Clear
        </Button>
      </CardActions>
    </Card>
  );
};

export default Filter;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px 10px",
  },
  cardContent: {
    padding: 0,
  },
  cardHeader: {
    padding: "5px 16px",
  },
}));
