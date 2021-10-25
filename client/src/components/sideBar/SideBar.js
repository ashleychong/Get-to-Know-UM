import React from "react";
import useStyles from "./style";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Avatar,
} from "@material-ui/core";
import admin from "../../assets/images/admin.png";
import {
  DashboardOutlined,
  EventAvailableOutlined,
  LocalCafeOutlined,
  LocalLibraryOutlined,
  DirectionsRunOutlined,
  PeopleAltOutlined,
} from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";

const SideBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const itemsList = [
    {
      text: "Dashboard",
      icon: <DashboardOutlined />,
      path: "#",
    },
    {
      text: "Cafe",
      icon: <LocalCafeOutlined />,
      path: "#",
    },
    {
      text: "Club",
      icon: <PeopleAltOutlined />,
      path: "/club",
    },
    {
      text: "Elective Course",
      icon: <LocalLibraryOutlined />,
      path: "/courses",
    },
    {
      text: "Event",
      icon: <EventAvailableOutlined />,
      path: "/event",
    },
    {
      text: "Leisure",
      icon: <DirectionsRunOutlined />,
      path: "#",
    },
  ];
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <Typography variant="h5" className={classes.header}>
        Admin Portal
      </Typography>
      <div className={classes.userDetails}>
        <Avatar className={classes.profile} src={admin} />
      </div>
      <Typography className={classes.username}>Admin</Typography>
      <Divider />
      <List className={classes.list}>
        {itemsList.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => history.push(item.path)}
            className={location.pathname === item.path ? classes.active : null}
          >
            <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
