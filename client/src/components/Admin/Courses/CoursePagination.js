import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";

import { getCourses } from "../../../actions/courses";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .Mui-selected": {
      backgroundColor: "#19D5C6",
      color: "#ffffff",
    },
  },
}));

const Paginate = ({ page }) => {
  const { numberOfPages, isLoading } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (page) {
      dispatch(getCourses(page));
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
          // create a new url for admin?
          to={`/courses?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;
