import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Help } from "@material-ui/icons";

import Layout from "../Layout/Layout";
import useStyles from "./AdminFoodHomeStyles";
import FoodNominationTable from "./FoodNominationTable";

const FoodNominationPage = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Layout pageHeaderTitle="Food">
        <>
          <div className={classes.root}>
            <FoodNominationTable />
          </div>
        </>
      </Layout>
    </>
  );
};

export default FoodNominationPage;
