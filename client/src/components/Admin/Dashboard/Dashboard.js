import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CssBaseline,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar,
  CircularProgress,
} from "@material-ui/core";
import Layout from "../Layout/Layout";
import PageHeader from "../../PageHeader";
import useStyles from "./styles";
import {
  EventAvailableOutlined,
  LocalLibraryOutlined,
  DirectionsRunOutlined,
  PeopleAltOutlined,
  StarRateRounded,
  FastfoodOutlined,
  LocalDiningOutlined,
  ForumOutlined,
} from "@material-ui/icons";
import { getFoodNominations } from "../../../actions/foodNominations";
import { getCourses } from "../../../actions/courses";
import { getClubs } from "../../../actions/clubs";
import { getEvents } from "../../../actions/events";
import { getAllCafes } from "../../../actions/cafe";
import { getExps } from "../../../actions/experience";
import { getLeisures } from "../../../actions/leisure";
import { getPendingForumReports } from "../../../actions/forumReports";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { exps } = useSelector((state) => state.exps);
  const { events } = useSelector((state) => state.events);
  const { leisures } = useSelector((state) => state.leisures);
  const { clubs } = useSelector((state) => state.clubs);
  const { cafes } = useSelector((state) => state.cafes);
  const { courses } = useSelector((state) => state.courses);
  const { foodNominations } = useSelector((state) => state.foodNominations);
  const pendingFoodList = foodNominations.filter(
    (foodNomination) => foodNomination?.status === "pending"
  );
  const { pendingReports } = useSelector((state) => state.forumReports);
  const classes = useStyles();
  const { dashboardLoading } = useSelector((state) => state.adminDashboard);

  const itemsList = [
    {
      text: "Pending Forum Reports",
      icon: <ForumOutlined />,
      color: "#bdbdbd",
      no: pendingReports.length,
    },
    {
      text: "Cafe",
      icon: <LocalDiningOutlined />,
      color: "#f44336",
      no: cafes.length,
    },
    {
      text: "Pending Food Nominations",
      icon: <FastfoodOutlined />,
      color: "#e91e63",
      no: pendingFoodList.length,
    },
    {
      text: "Club",
      icon: <PeopleAltOutlined />,
      color: "#d500f9",
      no: clubs.length,
    },
    {
      text: "Course",
      icon: <LocalLibraryOutlined />,
      color: "#00e5ff",
      no: courses.length,
    },
    {
      text: "Event",
      icon: <EventAvailableOutlined />,
      color: "#ff9100",
      no: events.length,
    },
    {
      text: "Leisure",
      icon: <DirectionsRunOutlined />,
      color: "#009688",
      no: leisures.length,
    },
    {
      text: "Experience",
      icon: <StarRateRounded />,
      color: "#ffeb3b",
      no: exps.length,
    },
  ];

  useEffect(() => {
    dispatch(getFoodNominations());
    dispatch(getClubs());
    dispatch(getCourses());
    dispatch(getEvents());
    dispatch(getAllCafes());
    dispatch(getExps());
    dispatch(getLeisures());
    dispatch(getPendingForumReports());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <Layout pageHeaderTitle="Dashboard">
        <Box className={classes.box}>
          {dashboardLoading ? (<CircularProgress />) : (
            <Grid container spacing={5} alignItems="stretch">
              {itemsList.map((item) => (
                <Grid item key={item.text} xs={12} sm={6} md={4}>
                  <Card style={{ height: "100%" }}>
                    <CardContent style={{ height: "100%" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "1.5rem",
                          }}
                        >
                          <Grid container>
                            <Grid item xs={10} md={9}>
                              <Typography
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                  lineHeight: "1.6",
                                }}
                                color="textSecondary"
                                gutterBottom
                                variant="overline"
                              >
                                {item.text}
                              </Typography>
                            </Grid>
                            <Grid item xs={2} md={3}>
                              <Avatar
                                style={{
                                  backgroundColor: item.color,
                                  margin: "auto",
                                }}
                                sx={{
                                  height: 56,
                                  width: 56,
                                }}
                              >
                                {item.icon}
                              </Avatar>
                            </Grid>
                          </Grid>
                        </div>
                        <Typography color="textPrimary" variant="h4">
                          {item.no}
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Layout>
    </>
  );
}
