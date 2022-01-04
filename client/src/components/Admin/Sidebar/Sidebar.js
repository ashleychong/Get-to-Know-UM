import React, { useEffect, useState } from "react";
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
  Close,
  DashboardOutlined,
  EventAvailableOutlined,
  LocalLibraryOutlined,
  DirectionsRunOutlined,
  PeopleAltOutlined,
  StarRateRounded,
  FastfoodOutlined,
  LocalDiningOutlined,
  ForumOutlined,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, Link } from "react-router-dom";

import useStyles from "./styles";
import Custom from "../../Custom/Custom";
import * as actionType from "../../../constants/actionTypes";

const SideBar = (props) => {
  const { downSm, isSidebarOpen, handleDrawerToggle } = props;
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.authData);

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
      path: "#",
    },
    {
      text: "Forum",
      icon: <ForumOutlined />,
      path: "/admin/forumReports",
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
        {downSm && (
          <div
            style={{
              padding: "24px 16px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Custom.ActionButton
              color="closeSidebar"
              onClick={handleDrawerToggle}
            >
              <Close />
            </Custom.ActionButton>
          </div>
        )}
        <div className={classes.adminInfo}>
          <Typography variant="h5" className={classes.header}>
            Admin Portal
          </Typography>
          <div>
            <Avatar
              className={classes.avatar}
              alt={user?.result?.name}
              src={user?.result?.image}
              component={Link}
              to="/admin/profile"
            >
              {user?.result?.name?.charAt(0)}
            </Avatar>
          </div>
          <Typography
            className={classes.username}
            component={Link}
            to="/admin/profile"
          >
            {user?.result?.name}
          </Typography>
        </div>
        <Divider
          style={{
            backgroundColor: "#2D3748",
            margin: "24px 0",
          }}
        />
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
            onClick={logout}
            fullWidth
            style={{
              marginTop: 16,
              backgroundColor: "#10B981",
              color: "white",
              textTransform: "none",
              fontWeight: "600",
              fontSize: "0.9rem",
              letterSpacing: "0.01rem",
            }}
            variant="contained"
          >
            Log out
          </Button>
          {/* <Button
            variant="contained"
            className={classes.logoutBtn}
            onClick={logout}
          >
            Logout
          </Button> */}
        </div>
      </Box>
    </>
  );

  return downSm ? (
    <Drawer
      variant="temporary"
      anchor="left"
      open={isSidebarOpen}
      onClose={handleDrawerToggle}
      classes={{
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      {content}
    </Drawer>
  ) : (
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
