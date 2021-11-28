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
import LeisureForm from "./LeisureForm";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));

const LeisurePopup = ({ currentId, setCurrentId, openPopup, setOpenPopup }) => {
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
            {currentId ? "Edit leisure" : "Create a new leisure"}
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
        <LeisureForm
          currentId={currentId}
          setCurrentId={setCurrentId}
          setOpenPopup={setOpenPopup}
        />
      </DialogContent>
    </Dialog>
  );
};

export default LeisurePopup;
