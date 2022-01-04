import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CssBaseline, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import useStyles from "./CafeHomeStyles";
import Layout from "../Layout/Layout";
import { getAllCafes } from "../../../actions/cafe";
import CafePopup from './CafePopup';
import CafeTable from "./CafeTable";


export default function CafeHome() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [currentCafeId, setCurrentCafeId] = useState(0);

  // useEffect(() => {
  //   dispatch(getAllCafes());
  // }, [dispatch]);

  // const editInPopup = (cafeId) => {
  //   setCurrentCafeId(cafeId);
  //   setOpenPopup(true);
  // };

  return (
    <>
      <CssBaseline />
      <Layout pageHeaderTitle="Cafes">
        <>
          <div className={classes.root}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "4vh 0",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => {
                  setOpenPopup(true);
                }}
              >
                Add new cafe
              </Button>
            </div>
            <CafeTable />
          </div>
          {/* <div className={classes.createButtonRow}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setOpenPopup(true);
              }}
            >
              Add new cafe
            </Button>
          </div>
          <Grid container alignItems="stretch" spacing={3}>
            <CafeCards editInPopup={editInPopup} />
          </Grid> */}
          <CafePopup
            currentCafeId={currentCafeId}
            setCurrentCafeId={setCurrentCafeId}
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          />
        </>
      </Layout>
    </>
  );
}
