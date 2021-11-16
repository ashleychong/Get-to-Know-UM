import React, { useEffect } from "react";
import { Paper, Typography, Divider, Box, Button } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import useStyles from "./style";
import { getClub, getClubsBySearch } from "../../../actions/clubs";

const ClubDetails = () => {
  const { club, clubs } = useSelector((state) => state.clubs);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const [value, setValue] = React.useState("1");
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getClub(id));
  }, [id]);

  if (!club) return null;

  return (
    <Paper style={{ padding: "20px" }}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography className={classes.title} variant="h4">
            {club.title}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Box sx={{ width: "100%", typography: "body1" }}>
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
                  <Tab label="About" value="1" />
                  <Tab label="Event" value="2" />
                  <Tab label="Contact" value="3" />
                  <Tab label="Review" value="4" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Typography className={classes.details}>
                  {club.about}
                </Typography>
              </TabPanel>
              <TabPanel value="2">
                <Typography className={classes.details}>
                  {club.event}
                </Typography>
              </TabPanel>
              <TabPanel value="3">
                <Typography className={classes.details}>
                  {club.contact}
                </Typography>
              </TabPanel>
              <TabPanel value="4">Item Three</TabPanel>
            </TabContext>
          </Box>
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={club.img || ""}
            alt={club.title}
          />
          {club.clublink && (
            <div className={classes.button}>
              <Button
                disabled={!user?.result}
                className={classes.submitButton}
                variant="contained"
                color="primary"
                size="medium"
                onClick={() => window.open(club?.clublink)}
              >
                Join Club
              </Button>
            </div>
          )}
        </div>
      </div>
    </Paper>
  );
};
export default ClubDetails;
