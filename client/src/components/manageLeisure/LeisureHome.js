import { Button, CssBaseline, CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./styles";
import LeisurePopup from "./LeisurePopup";
import Layout from "../Admin/Layout/Layout";
import LeisureTable from "./LeisureTable/Table";

const LeisureHome = () => {
  const { leisures, isLoading } = useSelector((state) => state.leisures);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const user = JSON.parse(localStorage.getItem("profile"));

  const editInPopup = (leisure) => {
    setCurrentId(leisure._id);
    setOpenPopup(true);
  };

  return (
    <>
      <CssBaseline />
      <Layout pageHeaderTitle="Leisure">
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
                Create a new leisure
              </Button>
            </div>
            <LeisureTable editInPopup={editInPopup} />
          </div>
          <LeisurePopup
            currentId={currentId}
            setCurrentId={setCurrentId}
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          />
        </>
      </Layout>
    </>
  );
};

export default LeisureHome;
