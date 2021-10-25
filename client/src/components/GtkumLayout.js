import React from "react";
import useStyles from "./gtkumStyle";
import Header from "./Header/Header";

const GtkumLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default GtkumLayout;
