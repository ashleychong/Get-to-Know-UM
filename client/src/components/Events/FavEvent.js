import React, { useState, useCallback } from "react";
import { Grid } from "@material-ui/core";
import Events from "./Events";
import Pagination from "./Pagination";
import { useLocation } from "react-router-dom";
import useStyles from "./style";
import { useHistory } from "react-router-dom";
import PageHeader from "../PageHeader";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const FavEvent = () => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get("page") || 1;
  // const [refresh, setRefresh] = useState(false);

  // const callback = useCallback((refresh) => {
  //   setRefresh(!refresh);
  // }, []);

  return (
    <>
      <PageHeader title="My Favourite Events" />
      <Events />

      <Grid className={classes.pagination}>
        <Pagination page={page} />
      </Grid>
    </>
  );
};

export default FavEvent;
