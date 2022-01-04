import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";

import { deleteCourse } from "../../../../actions/courses";
import reading from "../../../../assets/images/reading.jpg";
import useStyles from "./styles";


export default function Course(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { course, editInPopup } = props;
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Grid item className={classes.cardGrid} xs={12} sm={6} md={4}>
      <CardActionArea component="a" href={`/courses/${course._id}`}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={course.image || reading}
          />
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {course.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {course.courseCode}
              </Typography>
              <Typography variant="body1">
                {course.description.split(" ").splice(0, 30).join(" ")}...
              </Typography>
              {user?.result?.role === "admin" && (
                <div className={classes.right}>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      editInPopup(course);
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="secondary"
                    onClick={() => dispatch(deleteCourse(course._id))}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </div>
              )}
            </CardContent>
          </div>
          {/* <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={course.image || "https://source.unsplash.com/random"}
            />
          </Hidden> */}
        </Card>
      </CardActionArea>
    </Grid>
  );
}

Course.propTypes = {
  course: PropTypes.object,
};
