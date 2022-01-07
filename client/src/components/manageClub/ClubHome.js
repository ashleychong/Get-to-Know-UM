import { Button, CssBaseline } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./styles";
import ClubPopup from "./ClubPopup";
import Layout from "../Admin/Layout/Layout";
import ClubTable from "./ClubTable/Table";
import { getClubs } from "../../actions/clubs";

const ClubHome = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const user = JSON.parse(localStorage.getItem("profile"));

  const editInPopup = (club) => {
    setCurrentId(club._id);
    setOpenPopup(true);
  };
  useEffect(() => {
    dispatch(getClubs());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <Layout pageHeaderTitle="Clubs">
        <>
          <div className={classes.pageContent}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "6vh",
              }}
            >
              {user?.result?.role === "admin" && (
                <Button
                  color="primary"
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => {
                    setOpenPopup(true);
                  }}
                >
                  Create club
                </Button>
              )}
            </div>
            <ClubTable editInPopup={editInPopup} />
          </div>
          <ClubPopup
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

export default ClubHome;
