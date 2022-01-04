import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
} from "@material-ui/core/";
import RoomIcon from "@material-ui/icons/Room";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
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
              <CardContent>
                <Typography
                  component="h5"
                  variant="h5"
                  style={{ fontWeight: "bold", color: "#333996" }}
                >
                  {leisure.leisure.title}
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
                    &nbsp;&nbsp;{leisure.leisure.location}
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
                    {leisure.leisure.fee == 0
                      ? "Free"
                      : `RM${leisure.leisure.fee}`}
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
                    &nbsp;&nbsp;{leisure.leisure.openTime} -{" "}
                    {leisure.leisure.closeTime}
                  </Typography>
                </div>
                <Typography variant="body1" style={{ textAlign: "justify" }}>
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
              <CardContent>
                <Typography
                  component="h5"
                  variant="h5"
                  style={{ fontWeight: "bold", color: "#333996" }}
                >
                  {leisure.leisure.title}
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
                    &nbsp;&nbsp;{leisure.leisure.location}
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
                    {leisure.leisure.fee == 0
                      ? "Free"
                      : `RM${leisure.leisure.fee}`}
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
                    &nbsp;&nbsp;{leisure.leisure.openTime} -{" "}
                    {leisure.leisure.closeTime}
                  </Typography>
                </div>
                <Typography variant="body1" style={{ textAlign: "justify" }}>
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
