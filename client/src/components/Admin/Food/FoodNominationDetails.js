import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  Card,
  CardContent,
  Grid,
  Divider,
  Typography,
  CircularProgress,
  Box,
} from "@material-ui/core";

import useStyles from "./FoodNominationDetailsStyles";
import {
  getFoodNomination,
  approveFoodNomimation,
  declineFoodNomimation,
} from "../../../actions/foodNominations";
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
    dispatch(approveFoodNomimation(foodNominationId, history));
  };

  const handleDeclination = () => {
    dispatch(declineFoodNomimation(foodNominationId, history));
  };

  if (!foodNomination) {
    return null;
  }

  return isLoading ? (
    <Layout>
      <Box ml={5} mt={5}>
        <CircularProgress />
      </Box>
    </Layout>
  ) : (
    <>
      <Layout>
        <Box className={classes.root}>
          <div className={classes.header}>
            <Typography style={{ fontWeight: 500 }} variant="h4">
              Food Approval Request
            </Typography>
          </div>
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
                    <Custom.Button
                      color="primary"
                      onClick={() => handleApproval()}
                      text="Approve"
                    />
                    <Custom.Button
                      color="secondary"
                      text="Decline"
                      onClick={() => handleDeclination()}
                    />
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
