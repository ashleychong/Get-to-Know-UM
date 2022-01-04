import React, { useEffect } from "react";
import { Box, Paper, Typography, Button } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Calc from "./calculator";
import useStyles from "./style";
import PlanCal from "./PlanCal";
import PageHeader from "../PageHeader";

const GPACalHome = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <PageHeader title="GPA Calculator" />
      <Paper className={classes.paper} elevation={3}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#333996",
                },
              }}
            >
              <Tab
                style={{ textTransform: "none" }}
                label="GPA Calculator"
                value="1"
              />
              <Tab
                style={{ textTransform: "none" }}
                label="GPA Planning Calculator"
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Calc />
          </TabPanel>
          <TabPanel value="2">
            <PlanCal />
          </TabPanel>
        </TabContext>
      </Paper>
      <div className={classes.bottom}></div>
    </>
  );
};
export default GPACalHome;
