import { Button, CssBaseline, CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import PageHeader from "../PageHeader";
import ExpPopup from "./ExpPopup";
import Layout from "../Admin/Layout/Layout";
import ExpTable from "./ExpTable/Table";

const ExpHome = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const user = JSON.parse(localStorage.getItem("profile"));

  const editInPopup = (exp) => {
    setCurrentId(exp._id);
    setOpenPopup(true);
  };

  if (user?.result?.role === "admin") {
    return (
      <>
        <CssBaseline />
        <Layout>
          <>
            <PageHeader title="Experience"></PageHeader>
            <div className={classes.pageContent}>
              <ExpTable editInPopup={editInPopup} />
            </div>
            <ExpPopup
              currentId={currentId}
              setCurrentId={setCurrentId}
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            />
          </>
        </Layout>
      </>
    );
  }
};

export default ExpHome;
