import React from "react";
import SideBar from "../Sidebar/Sidebar";
import useStyles from "./styles";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideBar />
          <div className={classes.page}>
              {children}
          </div>
    </div>
  );
};

export default Layout;
