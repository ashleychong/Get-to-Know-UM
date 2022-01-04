import React, { useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import SideBar from "../Sidebar/Sidebar";
import useStyles from "./styles";
import PageHeader from "../../PageHeader";

const Layout = ({ pageHeaderTitle, children }) => {
  const downSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const openDrawer = () => {
    setSidebarOpen(true);
  };

  return (
    <div className={classes.root}>
      <SideBar
        downSm={downSm}
        handleDrawerToggle={handleDrawerToggle}
        isSidebarOpen={isSidebarOpen}
      />
      <div className={classes.page}>
        <PageHeader
          title={pageHeaderTitle}
          downSm={downSm}
          handleDrawerToggle={openDrawer}
        />
        {children}
      </div>
    </div>
  );
};

export default Layout;
