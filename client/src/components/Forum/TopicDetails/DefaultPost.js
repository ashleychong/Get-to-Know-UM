import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Avatar, Typography, Button } from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";

import useStyles from "./postStyles";
import { deleteTopic } from './../../../actions/topics';

const DefaultPost = ({ topic }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
    
  return (
    <div className={classes.postLayout}>
      <div className={classes.avatarSection}>
        <Typography align="center" variant="subtitle2" color="textPrimary" gutterBottom> {topic?.username} </Typography>
        <Avatar className={classes.leftAvatar}>
          {topic?.username?.charAt(0)}
        </Avatar>
      </div>
      <div className={classes.textSection}>
        <div>
          <Typography color="textPrimary" variant="body1" gutterBottom>
            {topic?.message}
          </Typography>
        </div>
        <div>
          <Grid container alignItems="center">
            <Grid>
              <Typography
                variant="caption"
                color="textSecondary"
                component="div"
              >
                {`${moment(topic?.createdAt).format("lll")}`}
              </Typography>
            </Grid>
            <Grid className={classes.right}>
              {/* {user?.result?._id === topic?.userId && (
                <div>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      editTopicInPopup(topic);
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
              )} */}
            </Grid>
          </Grid>
        </div>
      </div>
      {/* </Grid> */}
    </div>
  );
};

export default DefaultPost;
