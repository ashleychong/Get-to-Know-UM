import { Button, CssBaseline, CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./styles";
import PageHeader from "../PageHeader";
import { getCourses } from "../../actions/courses";
import EventPopup from "./EventPopup";
import Layout from "../Admin/Layout/Layout";
import EventTable from "./EventTable/Table";

const EventHome = () => {
  const { events, isLoading } = useSelector((state) => state.events);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const user = JSON.parse(localStorage.getItem("profile"));

  const editInPopup = (event) => {
    setCurrentId(event._id);
    setOpenPopup(true);
  };

  if (user?.result?.role === "admin") {
    return (
      <>
        <CssBaseline />
        <Layout pageHeaderTitle="Events">
          <>
            <div className={classes.pageContent}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "6vh",
                }}
              >
                <Button
                  color="primary"
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => {
                    setOpenPopup(true);
                  }}
                >
                  Create a new event
                </Button>
              </div>
              <EventTable editInPopup={editInPopup} />
            </div>
            <EventPopup
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

export default EventHome;
