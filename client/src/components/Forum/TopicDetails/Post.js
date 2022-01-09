import React, { useState } from "react";
import {
  Grid,
  Avatar,
  Divider,
  Typography,
  Button,
  IconButton,
  Box,
} from "@material-ui/core/";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import FlagIcon from "@material-ui/icons/Flag";
import { useDispatch } from "react-redux";
import moment from "moment";

import { deletePost } from "./../../../actions/posts";
import useStyles from "./postStyles";
import ReportPopup from "./ReportPopup";

const Post = ({ editInPopup, topicId, post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [reportedContent, setReportedContent] = useState({});
  const user = JSON.parse(localStorage.getItem("profile"));
  const author = post?.userData[0];

  const openReportPopup = () => {
    setReportedContent(post);
    setOpenPopup(true);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={2}>
          <Box className={classes.userInfo}>
            <Avatar className={classes.userAvatar} src={author?.image}>
              {author?.name?.charAt(0)}
            </Avatar>
            <Typography align="center" variant="subtitle2">
              {author?.name}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Grid container className={classes.reviewDesc}>
            <Grid item xs={12} sm={11}>
              <Typography paragraph variant="subtitle1">
                {post?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={11} className={classes.actions}>
              <>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  className={classes.message}
                >
                  {`${moment(post?.createdAt).format("lll")}`}
                </Typography>
              </>
              <Box>
                {user?.result?._id === post?.userId ? (
                  <>
                    <IconButton
                      aria-label="edit"
                      color="primary"
                      className={classes.iconButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        editInPopup(post);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="secondary"
                      className={classes.iconButton}
                      onClick={() => dispatch(deletePost(topicId, post._id))}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                ) : (
                  <>
                    <IconButton
                      size="small"
                      color="default"
                      onClick={() => {
                        openReportPopup();
                      }}
                    >
                      <FlagIcon />
                    </IconButton>
                  </>
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ReportPopup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        reportedContent={reportedContent}
        setReportedContent={setReportedContent}
        contentType="post"
      />
    </>
  );
};

export default Post;
