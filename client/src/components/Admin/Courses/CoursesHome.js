import {
  Button,
  CssBaseline,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

import Layout from "../Layout/Layout";
import useStyles from "./CoursesHomeStyles";
import CourseTable from "./CourseTable";
import { getCourses, getCoursesBySearch } from "../../../actions/courses";
import CoursePopup from "./CoursePopup";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const AdminCoursesHome = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [currentCourseId, setCurrentCourseId] = useState(0);
  const [search, setSearch] = useState("");
  const history = useHistory();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const user = JSON.parse(localStorage.getItem("profile"));
  
  // useEffect(() => {
  //   dispatch(getCourses());
  // }, [dispatch]);

  // const searchCourse = () => {
  //   if (search.trim()) {
  //     dispatch(getCoursesBySearch({ search }));
  //     history.push(`/admin/courses/search?searchQuery=${search}`);
  //   } else {
  //     history.push("/admin/courses");
  //   }
  // };

  // const handleKeyPress = (e) => {
  //   if (e.keyCode === 13) {
  //     searchCourse();
  //   }
  // };

  // const editInPopup = (course) => {
  //   setCurrentCourseId(course._id);
  //   setOpenPopup(true);
  // };

  if (user?.result?.role === "admin") {
    return (
      <>
        <CssBaseline />
        <Layout pageHeaderTitle="Courses">
          <>
            <div className={classes.pageContent}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "6vh",
                }}
              >
                <Button
                  color="primary"
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => {
                    setOpenPopup(true);
                  }}
                >
                  Add new course
                </Button>
              </div>
              <CourseTable />

              {/* <Courses editInPopup={editInPopup} />
              {!searchQuery && (
                <div className={classes.pagination}>
                  <Pagination page={page} />
                </div>
              )} */}
            </div>
            <CoursePopup
              currentCourseId={currentCourseId}
              setCurrentCourseId={setCurrentCourseId}
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            />
          </>
        </Layout>
      </>
    );
  } 
};

export default AdminCoursesHome;
