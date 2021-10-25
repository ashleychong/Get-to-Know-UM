import React from "react";
import { Grid, Avatar, Divider, Typography, Button } from "@material-ui/core/";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import moment from "moment";

import { deletePost } from './../../../actions/posts';
import useStyles from './postStyles';


const Post = ({ editInPopup, topicId, post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <div className={classes.postLayout}>
      <div className={classes.avatarSection}>
        <Typography align="center" variant="subtitle2" color="textPrimary" gutterBottom> {post?.username} </Typography>
        <Avatar className={classes.leftAvatar}>
          {post?.username?.charAt(0)}
        </Avatar>
      </div>
      <div className={classes.textSection}>
        <div>
          <Typography color="textPrimary" variant="body1" gutterBottom>
            {post?.message}
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
                {`${moment(post?.createdAt).format("lll")}`}
              </Typography>
            </Grid>
            <Grid className={classes.right}>
              {user?.result?._id === post?.userId && (
                <div>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      editInPopup(post);
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </Button>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => dispatch(deletePost(topicId, post._id))}
                  >
                    <DeleteIcon fontSize="small" />
                  </Button>
                </div>
              )}
            </Grid>
          </Grid>
        </div>
      </div>
      {/* </Grid> */}
    </div>
  );
};

export default Post;
