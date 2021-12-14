import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Course from "./Course/Course";

const Courses = () => {
    const { courses, isLoading } = useSelector((state) => state.courses);

    if (!courses?.length && !isLoading) {
        return "No results";
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