import React, { useEffect, useState } from "react";
import { Paper, Typography, CircularProgress, Divider, CssBaseline, Grid, Toolbar } from "@material-ui/core/";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import useStyles from "./TopicDetailsStyles";
import Posts from "./Posts";
import EditPopup from "./EditPopup";
import ReplyBox from "./ReplyBox";
import DefaultPost from './DefaultPost';
import { getPosts } from "../../../actions/posts";
import { getTopic } from "../../../actions/topics";

const TopicDetails = () => {
  const { topicId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { topic, isLoading } = useSelector((state) => state.topics);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(0);
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    // console.log(`Topic id is ${topicId}`);
    dispatch(getTopic(topicId, history));
    dispatch(getPosts(topicId));

  },[dispatch]);

  // useEffect(() => {
  //   dispatch(getPosts(topicId));
  // }, [topic]);

  const editInPopup = (post) => {
    setCurrentPostId(post._id);
    setOpenPopup(true);
  };

  if (!topic) {
    return null;
  }

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  return (
    <>
      <CssBaseline />
      <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9} className={classes.container}>
          {/* <Paper elevation={3}>
                <Typography gutterBottom variant="h6">
                  Forum Topics
                </Typography>
              </Paper> */}
          <Paper elevation={2} className={classes.titleHeaderRoot}>
            <div className={classes.titleHeader}>
              <Typography className={classes.titleText}>
                {topic.title}
              </Typography>
            </div>
          </Paper>
          <Paper className={classes.pageContent}>
            <DefaultPost topic={topic} />
            <Posts editInPopup={editInPopup} topicId={topicId} />
            <Divider style={{ margin: "20px 0" }} />
            {user?.result?.role !== "admin" && <ReplyBox topicId={topicId} />}
            <EditPopup
              title="Edit post"
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
              topicId={topicId}
              currentPostId={currentPostId}
              setCurrentPostId={setCurrentPostId}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default TopicDetails;
