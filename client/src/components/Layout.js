import React from "react";
// import SideBar from "./sideBar/SideBar";
import SideBar from "./Admin/Sidebar/Sidebar";
import useStyles from "./style";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideBar />
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
