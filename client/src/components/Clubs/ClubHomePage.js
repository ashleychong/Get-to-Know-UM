import React from "react";
import { Grid } from "@material-ui/core";
import Clubs from "./Clubs";
import Search from "./Search/Search";
import Pagination from "./Pagination";
import { useLocation } from "react-router-dom";
import useStyles from "./style";
import PageHeader from "../PageHeader";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ClubHomePage = () => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  return (
    <>
      <PageHeader title="Club" />
      <Search />
      <div className={classes.container}>
        <Clubs />
      </div>
      {!searchQuery && (
        <Grid className={classes.pagination}>
          <Pagination page={page} />
        </Grid>
      )}
    </>
  );
};

export default ClubHomePage;
