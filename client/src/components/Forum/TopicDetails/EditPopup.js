import React from 'react';
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import Custom from './../../Custom/Custom';
import EditPostForm from './EditPostForm';

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));

const EditPopup = ({ title, openPopup, setOpenPopup, topicId, currentPostId, setCurrentPostId }) => {
    const classes = useStyles();

    return (
      <Dialog
        open={openPopup}
        maxWidth="md"
        classes={{ paper: classes.dialogWrapper }}
      >
        <DialogTitle className={classes.dialogTitle}>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <Custom.ActionButton
              color="secondary"
              onClick={() => {
                setOpenPopup(false);
                setCurrentPostId(0);
              }}
            >
              <CloseIcon />
            </Custom.ActionButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <EditPostForm
            topicId={topicId}
            currentPostId={currentPostId}
            setCurrentPostId={setCurrentPostId}
            setOpenPopup={setOpenPopup}
          />
        </DialogContent>
      </Dialog>
    );
};

export default EditPopup;
