import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
  Toolbar,
  InputAdornment,
  Avatar,
  CircularProgress,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Search, Edit, Delete } from "@material-ui/icons";

import useStyles from "./CourseTableStyles";
import Input from "../../Custom/Input";
import { getCourses, deleteCourse } from "../../../actions/courses";
import useTable from "../../Custom/useTable";
import CoursePopup from "./CoursePopup";

const CourseTable = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  const [currentCourseId, setCurrentCourseId] = useState(0);
  const { courses, isLoading } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const editInPopup = (courseId) => {
    setCurrentCourseId(courseId);
    setOpenPopup(true);
  };

  const headCells = [
    { id: "number", label: "No.", disableSorting: "true" },
    { id: "title", label: "title" },
    { id: "image", label: "Image", disableSorting: "true" },
    { id: "courseCode", label: "Course Code" },
    { id: "faculty", label: "Faculty" },
    { id: "actions", label: "Actions", disableSorting: "true" },
  ];

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(courses, headCells, filterFn);

  if (!courses?.length && !isLoading) {
    return (
      <Box mx={2} my={3}>
        <Typography>
          No courses yet.
        </Typography>
      </Box>
    );
  }

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter(
            (x) =>
              x.title.toLowerCase().includes(target.value.toLowerCase()) ||
              x.courseCode.toLowerCase().includes(target.value.toLowerCase())
          );
      },
    });
  };

  return isLoading ? (<CircularProgress />): (
    <>
      <Paper className={classes.paper}>
        <Toolbar>
          <Input
            label="Search course"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((course, index) => (
              <TableRow key={course._id}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{course?.title}</TableCell>
                <TableCell>
                  <Avatar
                    src={course?.image || "https://source.unsplash.com/random"}
                    alt={course?.name}
                  />
                </TableCell>
                <TableCell>{course?.courseCode}</TableCell>
                <TableCell>{course?.faculty}</TableCell>
                <TableCell>
                  <>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        editInPopup(course?._id);
                      }}
                    >
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="secondary"
                      onClick={() => dispatch(deleteCourse(course?._id))}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <CoursePopup
        currentCourseId={currentCourseId}
        setCurrentCourseId={setCurrentCourseId}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      />
    </>
  );
};

export default CourseTable;
