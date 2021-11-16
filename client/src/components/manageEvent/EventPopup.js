import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import Custom from "../Custom/Custom";
import EventForm from "./EventForm";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));

const EventPopup = ({ currentId, setCurrentId, openPopup, setOpenPopup }) => {
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
            {currentId ? "Edit event" : "Create a new event"}
          </Typography>
          <Custom.ActionButton
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
              setCurrentId(0);
            }}
          >
            <CloseIcon />
          </Custom.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <EventForm
          currentId={currentId}
          setCurrentId={setCurrentId}
          setOpenPopup={setOpenPopup}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EventPopup;
