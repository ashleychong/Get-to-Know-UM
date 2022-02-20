import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Typography, Grid, Button, Box } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import Custom from "../../Custom/Custom";

import useStyles from "./styles";
import TagChip from "./Tag";
import { deleteTopic } from './../../../actions/topics';

const Topic = ({ topic, editInPopup }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const confirmRemove = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    dispatch(deleteTopic(id));
  };

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
        <Box my={1}>
          <Grid container spacing={1}>
            {topic?.tags?.map((tag, i) => (
              <Grid item key={i}>
                <TagChip tag={tag} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Grid container alignItems="center">
          <Grid>
            <Typography variant="subtitle1" component="div">
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
                  onClick={() => {
                    setConfirmDialog({
                      isOpen: true,
                      title: "Are you sure to delete this topic?",
                      subTitle: "You can't undo this operation",
                      onConfirm: () => {
                        confirmRemove(topic?._id);
                      },
                    });
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </Button>
              </div>
            )}
          </Grid>
        </Grid>
      </div>
      <Custom.ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </div>
  );
};

export default Topic;
