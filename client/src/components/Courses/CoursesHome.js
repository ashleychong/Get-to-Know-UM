import {
  CssBaseline, Grid, useMediaQuery, useTheme
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import useStyles from "./styles";
import Pagination from "./CoursePagination";
import PageHeader from "../PageHeader";
import Courses from "./Courses";
import Custom from "../Custom/Custom";
import { getCoursesByPage, getCoursesBySearch } from "../../actions/courses";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const initialValues = {
  search: "",
  faculty: "",
};

const CoursesHome = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const faculty = query.get("faculty");
  const theme = useTheme();
  const downXs = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    if (searchQuery || faculty) {
      dispatch(getCoursesBySearch({ search: searchQuery, faculty }));
    } else {
      dispatch(getCoursesByPage(page));
    }
  }, [dispatch]);

  const { values, setValues, handleInputChange, resetForm } = Custom.useForm(initialValues);

  const searchCourse = () => {
    if (values.search || values.faculty) {
      dispatch(getCoursesBySearch({ search: values.search, faculty: values.faculty }));
      history.push(`/courses/search?searchQuery=${values.search || "none"}&faculty=${values.faculty || "none"}`);
  
    } else {
      history.push("/courses");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchCourse();
    }
  };

  const clearFilter = () => {
    resetForm();
    history.push("/courses");
  }

  return (
    <>
      <CssBaseline />
      <PageHeader title="Courses">
        {/* <Custom.SearchBar
          placeholder="Search..."
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
        /> */}
      </PageHeader>
      <div className={classes.pageContent}>
        <Grid container spacing={2} className={classes.searchContainer}>
          <Grid item xs={12} sm={6} lg={4}>
            <Custom.DropDown
              name="faculty"
              label="Faculty"
              value={values.faculty}
              onChange={handleInputChange}
              isFaculty
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Custom.Input
              fullWidth
              label="Course title or course code"
              name="search"
              value={values.search}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
          </Grid>
          <Grid item xs={12} lg={4} className={classes.filterContainer}>
            <Custom.Button
              text="Apply filter"
              variant="contained"
              fullWidth={downXs}
              onClick={searchCourse}
            />
            <Custom.Button
              text="Clear filter"
              variant="outlined"
              fullWidth={downXs}
              onClick={clearFilter}
            />
          </Grid>
        </Grid>
        <Courses />
      </div>
      {!searchQuery && (
        <div className={classes.pagination}>
          <Pagination page={page} />
        </div>
      )}
    </>
  );
};

export default CoursesHome;
