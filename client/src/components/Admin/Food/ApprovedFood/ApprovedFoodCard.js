import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Divider,
  Typography,
  Box,
  Avatar,
} from "@material-ui/core";
import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";
import { useDispatch } from "react-redux";

import useStyles from "./ApprovedFoodCardStyles";
import { updateFood, deleteFood } from "../../../../actions/food";

const ApprovedFoodCard = (props) => {
  const { food, editInPopup, index } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={3} className={classes.ranking}>
        <span className={classes.ranking}>{index}</span>
        <Avatar
          src={food?.image || "https://source.unsplash.com/random"}
          alt={food?.foodName}
          className={classes.avatar}
        />
      </Grid>
      <Grid item xs={12} md={9}>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Box ml={1} mr={3}>
            <Box mb={1}>
              <Typography variant="h5" gutterBottom>
                {food?.foodName}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ fontSize: "1rem" }}
              >
                {food?.description}
              </Typography>
            </Box>
            <Typography className={classes.votes}>
              {food?.votes?.length > 1
                ? `${food?.votes.length} votes`
                : `${food?.votes.length} vote`}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.actions}>
          <IconButton
            size="small"
            color="primary"
            onClick={(e) => {
              e.stopPropagation();
              editInPopup(food);
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
};

export default ApprovedFoodCard;
