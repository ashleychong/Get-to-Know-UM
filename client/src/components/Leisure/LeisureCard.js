import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
} from "@material-ui/core/";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import useStyles from "./LeisureCardStyle";

export default function LeisureCard(leisure) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  return history.location.pathname.includes("inUM") &&
    leisure.leisure.category.includes("inUM") ? (
    <Grid className={classes.grid} container spacing={5}>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image={
              leisure.leisure.img
                ? leisure.leisure.img
                : "https://source.unsplash.com/random"
            }
            alt={leisure.leisure.title}
          />
          <Box className={classes.box}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {leisure.leisure.title}
                </Typography>
              </CardContent>
              <div className={classes.desc}>
                <Typography variant="body1" color="textSecondary">
                  {leisure.leisure.details}
                </Typography>
              </div>
            </div>
          </Box>
        </Card>
      </Grid>
    </Grid>
  ) : history.location.pathname.includes("nearUM") &&
    leisure.leisure.category.includes("nearUM") ? (
    <Grid className={classes.grid} container spacing={5}>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image={
              leisure.leisure.img
                ? leisure.leisure.img
                : "https://source.unsplash.com/random"
            }
            alt={leisure.leisure.title}
          />
          <Box className={classes.box}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {leisure.leisure.title}
                </Typography>
              </CardContent>
              <div className={classes.desc}>
                <Typography variant="body1" color="textSecondary">
                  {leisure.leisure.details}
                </Typography>
              </div>
            </div>
          </Box>
        </Card>
      </Grid>
    </Grid>
  ) : null;
}
