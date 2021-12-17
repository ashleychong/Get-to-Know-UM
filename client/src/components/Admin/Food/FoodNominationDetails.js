import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  Card,
  CardContent,
  Grid,
  Divider,
  Typography,
  Paper,
  CircularProgress,
  Box,
} from "@material-ui/core";

import useStyles from "./FoodNominationDetailsStyles";
import {
  getFoodNomination,
  approveFoodNomimation,
  declineFoodNomimation,
} from "../../../actions/foodNominations";
import { createFood } from "../../../actions/food";
import Custom from "../../Custom/Custom";
import Layout from "../Layout/Layout";
import PageHeader from "../../PageHeader";

const FoodNominationDetails = () => {
  const { foodNominationId } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { foodNomination, isLoading } = useSelector(
    (state) => state.foodNominations
  );

  useEffect(() => {
    dispatch(getFoodNomination(foodNominationId));
  }, [dispatch]);

  const handleApproval = () => {
    console.log("approve food");
    // dispatch(createFood({ ...foodNomination }));
    dispatch(approveFoodNomimation(foodNominationId));
    history.push("/admin/foodNominations");
  };

  const handleDeclination = () => {
    dispatch(declineFoodNomimation(foodNominationId));
    history.push("/admin/foodNominations");
  };

  if (!foodNomination) {
    return null;
  }

  return isLoading ? (
    <Layout>
      <Paper elevation={6}>
        <CircularProgress size="7em" />
      </Paper>
    </Layout>
  ) : (
    <>
      <Layout>
        <PageHeader title="Food Approval Request" />
        {/* <div className={classes.header}>
          <Typography variant="h4">Food Approval Request</Typography>
        </div> */}
        <Box mt={4} mb={2}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <div className={classes.detailsImgCtn}>
                <img
                  className={classes.detailsImg}
                  src={
                    foodNomination?.image ||
                    "https://source.unsplash.com/random"
                  }
                  alt={foodNomination?.foodName}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={8} className={classes.content}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5">Details</Typography>
                  <Divider className={classes.divider} />
                  <Box mt={5} mb={5}>
                    <Box mb={3}>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        className={classes.indicatorText}
                      >
                        Food Name
                      </Typography>
                      <Typography variant="body1">
                        {foodNomination.foodName}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        className={classes.indicatorText}
                      >
                        Description
                      </Typography>
                      <Typography variant="body1" component="p">
                        {foodNomination?.description}
                      </Typography>
                    </Box>
                  </Box>
                  <div style={({ display: "flex" }, { textAlign: "center" })}>
                    <Custom.ActionButton
                      color="approval"
                      onClick={() => handleApproval()}
                      className={classes.btn}
                    >
                      approve
                    </Custom.ActionButton>
                    <Custom.ActionButton
                      color="decline"
                      className={classes.btn}
                      onclick={() => handleDeclination()}
                    >
                      decline
                    </Custom.ActionButton>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </>
  );
};

export default FoodNominationDetails;
