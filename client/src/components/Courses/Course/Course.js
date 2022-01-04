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

import { deleteCourse } from './../../../actions/courses';
import reading from "../../../assets/images/reading.jpg";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  card: {
    display: "flex",
    "& .MuiPaper-root": {
      alignItems: "stretch",
    },
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  cardDetails: {
    flex: 1,
    height: "auto",
  },
  cardMedia: {
    // height: 0,
    paddingTop: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  right: {
    display: "flex",
    // marginLeft: "auto",
    justifyContent: "flex-end",
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
  title: {
    color: "rgba(107,94,250,1)",
  },
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { course } = props;

  return (
    <Grid item className={classes.cardGrid} xs={12} sm={6} md={4}>
      <CardActionArea component="a" href={`/courses/${course._id}`} style={{height: "100%"}}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={course.image || reading}
          />
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5" color="primary">
                {course.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {course.courseCode}
              </Typography>
              <Typography variant="body1" style={{ textAlign: "justify" }}>
                {course.description.split(" ").splice(0, 30).join(" ")}...
              </Typography>
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

FeaturedPost.propTypes = {
  course: PropTypes.object,
};
