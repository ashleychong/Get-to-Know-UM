import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Typography, Grid, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import Custom from "../../Custom/Custom";

import useStyles from "./styles";
import { deleteTopic } from './../../../actions/topics';

const Topic = ({ topic, editInPopup }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();

  // const openTopic = (e) => {
  //   // dispatch(getPost(post._id, history));
  //   history.push(`/forum/${topic._id}`);
  // };

  return (
    <div>
      <div className={classes.topicTitle}>
        <Typography
          variant="h6"
          color="textPrimary"
          component={Link}
          to={`/forum/${topic._id}`}
        >
          {topic.title}
        </Typography>
        <Grid container alignItems="center">
          <Grid>
            <Typography variant="subtitle2" component="div">
              {`Started by ${topic.username} ・ ${moment(
                topic.createdAt
              ).format("lll")}`}
            </Typography>
          </Grid>
          <Grid className={classes.right}>
            {user?.result?._id === topic?.userId && (
              <div>
                <Button
                  size="small"
                  color="primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    editInPopup(topic);
                  }}
                >
                  <EditIcon fontSize="small" />
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => dispatch(deleteTopic(topic._id))}
                >
                  <DeleteIcon fontSize="small" />
                </Button>
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Topic;
