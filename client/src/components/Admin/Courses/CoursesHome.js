import {
  Button,
  CssBaseline,
  Grid,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

import Layout from "../Layout/Layout";
import useStyles from "./CoursesHomeStyles";
import PageHeader from "../../PageHeader";
import { getCourses, getCoursesBySearch } from "../../../actions/courses";
import CoursePopup from "./CoursePopup";
import Courses from "./Courses";
import Custom from "../../Custom/Custom";
import Pagination from "./CoursePagination";

const dummyCourses = [
  {
    title: "Database",
    courseCode: "WIA2001",
    description:
      "This course covers theoretical and technical issues of Web development. Theoretical issues include the concepts of Web, client-server architecture, and quality attributes of Web-based systems. Technical issues include topics on systematic development of Web-based systems using different protocols, languages, techniques, and tools, taking relevant quality issues into consideration.",
    image: "https://source.unsplash.com/random",
    _id: "@srldkk;444",
  },
  {
    title: "Algorithm Design",
    courseCode: "WIA2005",
    description:
      "Concurrent programming plays a vital role in systems where many events appear to occur simultaneously. This course aims to provide an introduction to the problems common to concurrent systems such as operating systems, distributed systems and real-time systems, and practical knowledge of the programming constructs and techniques offered by modern concurrent programming languages.",
    image: "https://source.unsplash.com/random",
    _id: "&sdgrh65",
  },
  {
    title: "Web Programming",
    courseCode: "WIF2003",
    description:
      "This course begins by introducing the concepts of data visualization vs infographics. It provides students with the knowledge of where data can be found (data sources), how data can be acquired and how data can be analyzed and presented. It explains topics such as modeling concepts, data aspects, and visualization techniques. Techniques for visualizing multivariate, temporal, text-based, geospatial, and other types of data are taught. Students will be exposed to a few tools; to capture/import data, to analyze data and to visualize data.",
    image: "https://source.unsplash.com/random",
    _id: "a#jajiqw653",
  },
];

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

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const searchCourse = () => {
    if (search.trim()) {
      dispatch(getCoursesBySearch({ search }));
      history.push(`/admin/courses/search?searchQuery=${search}`);
    } else {
      history.push("/admin/courses");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchCourse();
    }
  };

  const editInPopup = (course) => {
    setCurrentCourseId(course._id);
    setOpenPopup(true);
  };

  if (user?.result?.role === "admin") {
    return (
      <>
        <CssBaseline />
        <Layout>
          <>
            <PageHeader title="Courses">
              <Custom.SearchBar
                placeholder="Search..."
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyPress}
              />
            </PageHeader>
            <div className={classes.pageContent}>
              <div className={classes.createButtonDiv}>
                <Button
                  className={classes.createButton}
                  variant="outlined"
                  startIcon={<AddIcon />}
                  onClick={() => {
                    setOpenPopup(true);
                  }}
                >
                  Create course
                </Button>
              </div>
              <Courses editInPopup={editInPopup} />
              {!searchQuery && (
                <div className={classes.pagination}>
                  <Pagination page={page} />
                </div>
              )}
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
