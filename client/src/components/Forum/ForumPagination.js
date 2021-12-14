import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";

import { getTopics } from "../../actions/topics";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .Mui-selected": {
      backgroundColor: "transparent",
      color: "#19D5C6",
    },
  },
}));

const Paginate = ({ page }) => {
  const { numberOfPages, isLoading } = useSelector((state) => state.topics);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (page) {
      dispatch(getTopics(page));
    }
  }, [dispatch, page]);

  return isLoading ? (
    <div />
  ) : (
    <Pagination
      count={numberOfPages}
      page={Number(page) || 1}
      className={classes.root}
      shape="rounded"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/forum?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;
