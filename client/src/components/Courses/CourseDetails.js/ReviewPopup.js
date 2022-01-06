import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import Custom from "../../Custom/Custom";
import ReviewForm from "./ReviewForm";

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

const ReviewPopup = ({
  openPopup,
  setOpenPopup,
  courseId,
  currentReviewId,
  setCurrentReviewId,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {currentReviewId ? "Edit review" : "Add a new review"}
          </Typography>
          <Custom.ActionButton
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
              setCurrentReviewId(0);
            }}
          >
            <CloseIcon />
          </Custom.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <ReviewForm
          courseId={courseId}
          currentReviewId={currentReviewId}
          setCurrentReviewId={setCurrentReviewId}
          setOpenPopup={setOpenPopup}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ReviewPopup;
