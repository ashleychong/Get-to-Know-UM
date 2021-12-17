import React from "react";
import { Grid, Button, Typography, Badge } from "@material-ui/core";
import Events from "./Events";
import Search from "./Search/Search";
import Pagination from "./Pagination";
import FilterButton from "./FilterButton/FilterButton";
import { useLocation } from "react-router-dom";
import useStyles from "./style";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";
import { useHistory } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const EventHomePage = () => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();

  return (
    <>
      <Button
        className={classes.btn}
        variant="contained"
        disabled={!user?.result}
        onClick={() => history.push("/event/fav")}
      >
        <LoyaltyOutlinedIcon className={classes.fav} />
        <Typography className={classes.word}>
          &nbsp;&nbsp;&nbsp;Favourite
        </Typography>
      </Button>
      <Search />
      <FilterButton />
      <Events />
      {!searchQuery && (
        <Grid className={classes.pagination}>
          <Pagination page={page} />
        </Grid>
      )}
    </>
  );
};

export default EventHomePage;
