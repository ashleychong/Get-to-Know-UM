import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";

import { getAllCafesByPages } from "../../actions/cafe";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .Mui-selected": {
      backgroundColor: "#19D5C6",
      color: "#ffffff",
    },
  },
}));

const Paginate = ({ page }) => {
  const { numberOfPages, isLoading } = useSelector(
    (state) => state.cafes
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (page) {
      dispatch(getAllCafesByPages(page));
    }
  }, [dispatch, page]);

  return isLoading ? (
    <div />
  ) : (
    <Pagination
      count={numberOfPages}
      page={Number(page) || 1}
      className={classes.root}
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/cafe?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;
