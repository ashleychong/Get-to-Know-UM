import React, { useEffect } from "react";
import decode from "jwt-decode";
import {
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Avatar,
  Box,
  useMediaQuery,
} from "@material-ui/core";
import {
  DashboardOutlined,
  EventAvailableOutlined,
  LocalLibraryOutlined,
  DirectionsRunOutlined,
  PeopleAltOutlined,
  StarRateRounded,
  FastfoodOutlined,
  LocalDiningOutlined,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import useStyles from "./styles";
import * as actionType from "../../../constants/actionTypes";
import admin from "../../../assets/images/admin.png";

const SideBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authData);
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  const logout = () => {
    console.log("Logged out");
    dispatch({ type: actionType.LOGOUT });

    history.push("/");
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
  }, [location]);

  const itemsList = [
    {
      text: "Dashboard",
      icon: <DashboardOutlined />,
      path: "/admin/dashboard",
    },
    {
      text: "Cafe",
      icon: <LocalDiningOutlined />,
      path: "/admin/cafe",
    },
    {
      text: "Food",
      icon: <FastfoodOutlined />,
      path: "/admin/foodNominations",
    },
    {
      text: "Club",
      icon: <PeopleAltOutlined />,
      path: "/admin/club",
    },
    {
      text: "Course",
      icon: <LocalLibraryOutlined />,
      path: "/admin/courses",
    },
    {
      text: "Event",
      icon: <EventAvailableOutlined />,
      path: "/admin/event",
    },
    {
      text: "Leisure",
      icon: <DirectionsRunOutlined />,
      path: "/admin/leisure",
    },
    {
      text: "Experience",
      icon: <StarRateRounded />,
      path: "/admin/exp",
    },
  ];

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Typography variant="h5" className={classes.header}>
          Admin Portal
        </Typography>
        <div className={classes.userDetails}>
          <Avatar
            className={classes.profile}
            alt={user?.result?.name}
            src={user?.result?.image || admin}
          />
        </div>
        <Typography className={classes.username}>
          {" "}
          {user?.result?.name}{" "}
        </Typography>
        <Divider />
        <List className={classes.list}>
          {itemsList.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path
                  ? classes.active
                  : classes.normal
              }
              selected={location.pathname === item.path}
            >
              <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <div className={classes.logoutDiv}>
          <Button
            variant="contained"
            className={classes.logoutBtn}
            onClick={logout}
          >
            Logout
          </Button>
        </div>
      </Box>
    </>
  );

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      {content}
    </Drawer>
  );
};

export default SideBar;
