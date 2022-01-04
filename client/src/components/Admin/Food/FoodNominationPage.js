import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Button,
  IconButton,
  Tabs,
  Tab,
  Tooltip,
  Box,
  Divider,
} from "@material-ui/core";

import Layout from "../Layout/Layout";
import PageHeader from "../../PageHeader";
import useStyles from "./FoodNominationPageStyles";
import FoodNominationTable from "./FoodNominationTable";
import ApprovedFoodPage from './ApprovedFood/ApprovedFoodPage';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

const FoodNominationPage = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <PageHeader title="Food" />
      <div className={classes.root}>
        <div className={classes.header}>
          <Tabs
            className={classes.tabBar}
            value={value}
            onChange={handleChange}
            textColor="inherit"
          >
            <Tab
              className={classes.tabButton}
              textColor="inherit"
              label="Nominated Food"
            />
            <Tab
              className={classes.tabButton}
              textColor="inherit"
              label="Approved Favourite Food in UM"
            />
          </Tabs>
        </div>
        <Divider />
        <div className={classes.tabContent}>
          <TabPanel className={classes.tabPanel} value={value} index={0}>
            <FoodNominationTable />
          </TabPanel>
          <TabPanel className={classes.tabPanel} value={value} index={1}>
            <ApprovedFoodPage />
          </TabPanel>
        </div>
      </div>
    </Layout>
  );
};

export default FoodNominationPage;
