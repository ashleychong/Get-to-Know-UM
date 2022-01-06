import { Grid, CircularProgress, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import Course from "./Course/Course";

const Courses = () => {
  const { courses, isLoading } = useSelector((state) => state.courses);

  if (!courses?.length && !isLoading) {
    return (
      <div style={{ margin: "48px 0 20px", textAlign: "center" }}>
        <Typography variant="h6">No results found</Typography>
      </div>
    );
  }

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {courses?.map((course) => (
        <Course key={course._id} course={course} />
      ))}
    </Grid>
  );
};

export default Courses;
