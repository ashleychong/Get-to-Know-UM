import { Paper, Toolbar, CssBaseline, Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AddIcon from "@material-ui/icons/Add";

import useStyles from "./styles";
import PageHeader from "./../PageHeader";
import Custom from "../Custom/Custom";
import PopUp from "./PopUp";
import Topics from "./Topics";
import { getTopics } from "../../actions/topics";

const Forum = () => {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopics());
  }, [dispatch]);


  const editInPopup = (topic) => {
    setCurrentId(topic._id);
    setOpenPopup(true);
  };

  return (
    <>
      <CssBaseline />
      <PageHeader title="Forum" />
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          <Paper className={classes.pageContent}>
            <Toolbar>
              <Typography variant="h6" component="div">
                Topics
              </Typography>
              <Custom.Button
                text="Create a new topic"
                variant="outlined"
                startIcon={<AddIcon />}
                className={classes.newButton}
                onClick={() => {
                  setOpenPopup(true);
                }}
              />
            </Toolbar>
            <Topics editInPopup={editInPopup} />
            <PopUp
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          </Paper>
        </Grid>
        {/* <Grid item md={3} lg={3} xl={3}>
                <Paper>
                    <Typography>Space</Typography>
                </Paper>    
            </Grid> */}
      </Grid>
    </>
  );
};

export default Forum;
