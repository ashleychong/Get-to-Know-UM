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
import ClubForm from "./ClubForm";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));

const ClubPopup = ({ currentId, setCurrentId, openPopup, setOpenPopup }) => {
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
            {currentId ? "Edit club" : "Create a new club"}
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
        <ClubForm
          currentId={currentId}
          setCurrentId={setCurrentId}
          setOpenPopup={setOpenPopup}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ClubPopup;
