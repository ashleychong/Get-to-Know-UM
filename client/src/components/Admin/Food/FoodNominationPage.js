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
} from "@material-ui/core";
import { Help } from "@material-ui/icons";

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
    <>
      <AppBar
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
        <FoodNominationTable/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ApprovedFoodPage/>
      </TabPanel>
    </>
  );
};

export default FoodNominationPage;
