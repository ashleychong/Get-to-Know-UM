import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Grid,
  Box,
  Avatar,
} from "@material-ui/core";

import RoomIcon from "@material-ui/icons/Room";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { likeExp } from "../../../../actions/experience";

const ExperienceCard = (props) => {
  const { exp, index } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (exp.likes.length > 0) {
      return exp.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;{exp.likes.length}{" "}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{exp.likes.length}{" "}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;{"0"}
      </>
    );
  };

  const Rank = (index) => {
    if (index == 1) {
      return (
        <img
          style={{ height: "50px", width: "60px ", margin: "auto" }}
          src="https://cdn-icons-png.flaticon.com/512/2583/2583344.png"
        />
      );
    } else {
      return (
        <Typography className={classes.ranking} variant="h4">
          {index}
        </Typography>
      );
    }
  };

  return (
    <>
      <div className={classes.position}>
        {index > 3 ? (
          <Avatar className={classes.ranking} variant="h4">
            {index}
          </Avatar>
        ) : index == 1 ? (
          <img
            style={{ height: "50px", width: "60px ", margin: "auto" }}
            src="https://cdn-icons-png.flaticon.com/512/2583/2583344.png"
          />
        ) : index == 2 ? (
          <img
            style={{ height: "50px", width: "60px ", margin: "auto" }}
            src="https://cdn-icons-png.flaticon.com/512/2583/2583319.png"
          />
        ) : (
          <img
            style={{ height: "50px", width: "60px ", margin: "auto" }}
            src="https://cdn-icons-png.flaticon.com/512/2583/2583434.png"
          />
        )}

        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image={exp.img}
            alt={exp.title}
          />

          <Box className={classes.box}>
            <CardContent>
              <Typography className={classes.expTitle}>
                {exp.title}{" "}
                <Button
                  className={classes.btn}
                  size="small"
                  color="primary"
                  disabled={!user?.result}
                  onClick={() => dispatch(likeExp(exp._id))}
                >
                  <Likes />
                </Button>
              </Typography>
            </CardContent>
            <div className={classes.desc}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <RoomIcon style={{ color: "red" }} />
                <Typography style={{ color: "grey" }}>
                  &nbsp;&nbsp;{exp.location}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <LocalAtmIcon style={{ color: "green" }} />
                <Typography style={{ color: "grey" }}>
                  &nbsp;&nbsp;
                  {exp.charge == 0 ? "Free" : `RM${exp.charge}`}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <AccessTimeIcon style={{ color: "indigo" }} />
                <Typography style={{ color: "grey" }}>
                  &nbsp;&nbsp;{exp.duration} mins
                </Typography>
              </div>
              <Typography variant="body1">{exp.description}</Typography>

              <Typography></Typography>
            </div>
          </Box>
        </Card>
      </div>
    </>
  );
};

export default ExperienceCard;
