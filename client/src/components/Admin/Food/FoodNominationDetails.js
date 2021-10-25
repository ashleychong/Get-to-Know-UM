import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  Paper,
  CircularProgress,
} from "@material-ui/core";

import {
  getFoodNomination,
  deleteFoodNomination,
} from "../../../actions/foodNominations";
import { createFood } from "../../../actions/food";
import Custom from "../../Custom/Custom";

const FoodNominationDetails = () => {
  const { foodNominationId } = useParams();
  const dispatch = useDispatch();
  const { foodNomination, isLoading } = useSelector(
    (state) => state.foodNominations
  );

  useEffect(() => {
    dispatch(getFoodNomination(foodNominationId));
  }, [dispatch]);

  const approveFoodNomination = () => {
    console.log("approve food");
    dispatch(createFood({...foodNomination}));
    dispatch(deleteFoodNomination(foodNominationId));
  };

  if (!foodNomination) {
    return null;
  }

  return isLoading ? (
    <Paper elevation={6}>
      <CircularProgress size="7em" />
    </Paper>
  ) : (
    <Card>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CardMedia component="img" title={foodNomination.foodName} />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4">{foodNomination.foodName}</Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <div style={({ display: "flex" }, { textAlign: "center" })}>
              <Custom.Button text="Approve" color="default" onClick={() => approveFoodNomination()} />
              <Custom.Button text="Reject" color="secondary" />
            </div>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FoodNominationDetails;
