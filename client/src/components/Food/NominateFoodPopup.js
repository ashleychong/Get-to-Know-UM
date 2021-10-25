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
import NominateFoodForm from "./NominateFoodForm";

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

const NominateFoodPopup = ({
  openPopup,
  setOpenPopup,
}) => {
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
            Nominate your favourite food
          </Typography>
          <Custom.ActionButton
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon />
          </Custom.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <NominateFoodForm 
          setOpenPopup={setOpenPopup}
        />
      </DialogContent>
    </Dialog>
  );
};

export default NominateFoodPopup;
