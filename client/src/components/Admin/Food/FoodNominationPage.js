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
  CardContent,
  Divider,
} from "@material-ui/core";
import { Help } from "@material-ui/icons";

import Layout from "../Layout/Layout";
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
      <div className={classes.root}>
        {/* <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={value} onChange={handleChange} textColor="inherit">
          <Tab textColor="inherit" label="Nominated Food" />
          <Tab textColor="inherit" label="Favourite Food in UM" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <FoodNominationTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ApprovedFoodPage />
      </TabPanel> */}
        <div className={classes.header}>
          <Typography variant="h4">Food</Typography>
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
              label="Favourite Food in UM"
            />
          </Tabs>
        </div>
        <Divider />
        <div className={classes.tabContent}>
          {/* <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs value={value} onChange={handleChange} textColor="inherit">
            <Tab textColor="inherit" label="Nominated Food" />
            <Tab textColor="inherit" label="Favourite Food in UM" />
          </Tabs>
        </Box> */}
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
