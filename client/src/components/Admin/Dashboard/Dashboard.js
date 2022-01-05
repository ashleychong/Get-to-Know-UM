import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
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
import { getAllFood } from "../../../actions/food";
import { getCourses } from "../../../actions/courses";
import { getClubs } from "../../../actions/clubs";
import { getEvents } from "../../../actions/events";
import { getAllCafes } from "../../../actions/cafe";
import { getExps } from "../../../actions/experience";
import { getLeisures } from "../../../actions/leisure";
import { getTopics } from "../../../actions/topics";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { exps } = useSelector((state) => state.exps);
  const { events } = useSelector((state) => state.events);
  const { leisures } = useSelector((state) => state.leisures);
  const { clubs } = useSelector((state) => state.clubs);
  const { cafes } = useSelector((state) => state.cafes);
  const { courses } = useSelector((state) => state.courses);
  const { foodList } = useSelector((state) => state.food);
  const { topics } = useSelector((state) => state.topics);
  const classes = useStyles();

  const itemsList = [
    {
      text: "Topic",
      icon: <ForumOutlined />,
      color: "#bdbdbd",
      no: topics.length,
    },
    {
      text: "Cafe",
      icon: <LocalDiningOutlined />,
      color: "#f44336",
      no: cafes.length,
    },
    {
      text: "Food",
      icon: <FastfoodOutlined />,
      color: "#e91e63",
      no: foodList.length,
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
    dispatch(getAllFood());
    dispatch(getClubs());
    dispatch(getCourses());
    dispatch(getEvents());
    dispatch(getAllCafes());
    dispatch(getExps());
    dispatch(getLeisures());
    dispatch(getTopics());
  }, []);

  return (
    <>
      <Layout pageHeaderTitle="Dashboard">
        <Box className={classes.box}>
          <Grid
            container
            spacing={5}
            alignItems="flex-end"
            style={{ margin: "20px" }}
          >
            {itemsList.map((item) => (
              <Grid item key={item.text} xs={12} md={3}>
                <Card>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        position: "relative",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                        color="textSecondary"
                        gutterBottom
                        variant="overline"
                      >
                        {item.text}
                      </Typography>
                      <Avatar
                        style={{
                          backgroundColor: item.color,
                          position: "absolute",
                          top: "0px",
                          right: "0px",
                        }}
                        sx={{
                          height: 56,
                          width: 56,
                        }}
                      >
                        {item.icon}
                      </Avatar>
                    </div>
                    <Typography color="textPrimary" variant="h4">
                      {item.no}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Layout>
    </>
  );
}
