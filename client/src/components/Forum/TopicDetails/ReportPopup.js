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
import ReportForm from "./ReportForm";

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

const ReportPopUp = (props) => {
  const {
    openPopup,
    setOpenPopup,
    reportedContent,
    setReportedContent,
    contentType,
  } = props;
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result?._id;
  // console.log("report form");
  // console.log(reportedContent);
  const hasReported = reportedContent?.reporterList?.find((id) => id === userId);

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {contentType === "post" ?  "Report this post" : "Report this thread"}
          </Typography>
          <Custom.ActionButton
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
              setReportedContent({});
            }}
          >
            <CloseIcon />
          </Custom.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        {hasReported ? (
          <Typography variant="h6" align="center">
            Your report has been submitted for review.
          </Typography>
        ) : (
          <ReportForm
            reportedContent={reportedContent}
            setReportedContent={setReportedContent}
            setOpenPopup={setOpenPopup}
            contentType={contentType}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ReportPopUp;
