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
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { likeExp } from "../../../../actions/experience";

const ExperienceCard = (props) => {
  const { exp, index } = props;
  // const [likes, setlikes] = useState(exp.exp.likeCount);
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

  return (
    <>
      <Grid className={classes.grid} container spacing={5}>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cover}
              image={exp.img}
              title={exp.title}
            />
            <div className={classes.ranking}>
              <Typography component="h6">{index}</Typography>
            </div>
            <Box className={classes.box}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
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
                  <Typography variant="body1" color="textSecondary">
                    {exp.description}
                  </Typography>
                </div>
              </div>
            </Box>
          </Card>
        </Grid>
      </Grid>
      {/* <Card className={classes.card}>
        <div className={classes.info}>
          <CardMedia
            component="img"
            alt={exp.exp.title}
            height="140"
            image={exp.exp.img}
          />
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {exp.exp.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {exp.exp.description}
            </Typography>
          </CardContent>
        </div>
      </Card> */}
    </>
  );
};

export default ExperienceCard;
