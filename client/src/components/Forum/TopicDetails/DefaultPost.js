import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Avatar, Typography, IconButton, Box } from "@material-ui/core/";
import FlagIcon from "@material-ui/icons/Flag";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";

import useStyles from "./postStyles";
import { deleteTopic } from './../../../actions/topics';
import ReportPopup from "./ReportPopup";
import EditTopicPopup from "../PopUp";

const DefaultPost = ({ topic }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [openEditTopicPopup, setOpenEditTopicPopup] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const [openReportPopup, setOpenReportPopup] = useState(false);
  const [reportedContent, setReportedContent] = useState({});
  const user = JSON.parse(localStorage.getItem("profile"));
  const author = topic?.userData[0];
    
  const handleOpenReportPopup = () => {
    setReportedContent(topic);
    setOpenReportPopup(true);
  };

  const editInPopup = (topic) => {
    setCurrentId(topic._id);
    setOpenEditTopicPopup(true);
  };

  const handleDeleteTopic = () => {
    dispatch(deleteTopic(topic._id, history));
  }

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
                {topic?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={11} className={classes.actions}>
              <>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  className={classes.message}
                >
                  {`${moment(topic?.createdAt).format("lll")}`}
                </Typography>
              </>
              <Box>
                {user?.result?._id === topic?.userId ? (
                  <>
                    <IconButton
                      aria-label="edit"
                      color="primary"
                      className={classes.iconButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        editInPopup(topic);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="secondary"
                      className={classes.iconButton}
                      onClick={handleDeleteTopic}
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
                        handleOpenReportPopup();
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
      <EditTopicPopup
        openPopup={openEditTopicPopup}
        setOpenPopup={setOpenEditTopicPopup}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <ReportPopup
        openPopup={openReportPopup}
        setOpenPopup={setOpenReportPopup}
        reportedContent={reportedContent}
        setReportedContent={setReportedContent}
        contentType="topic"
      />
    </>
  );
};

export default DefaultPost;
