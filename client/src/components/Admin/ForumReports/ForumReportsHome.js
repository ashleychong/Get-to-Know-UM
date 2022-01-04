import React, { useState } from "react";
import { Tabs, Tab, Box, Divider, Typography, } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Layout from "../Layout/Layout";
import useStyles from "./ForumReportsHomeStyles";
import PendingForumReportsTable from "./PendingForumReportsTable";
import ReviewedForumReportsTable from "./ReviewedForumReports";

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

const ForumReportPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout pageHeaderTitle="Forum Reports">
      <div className={classes.root}>
        <div className={classes.header}>
          <Tabs
            className={classes.tabBar}
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              className={classes.tabButton}
              textColor="primary"
              label="Reported Content"
            />
            <Tab
              className={classes.tabButton}
              textColor="primary"
              label="Reviewed Content"
            />
          </Tabs>
        </div>
        <Divider />
        <div>
          <TabPanel className={classes.tabPanel} value={value} index={0}>
            <PendingForumReportsTable />
          </TabPanel>
          <TabPanel className={classes.tabPanel} value={value} index={1}>
            <ReviewedForumReportsTable />
          </TabPanel>
        </div>
      </div>
    </Layout>
  );
};

export default ForumReportPage;