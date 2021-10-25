import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import Custom from "../../../Custom/Custom";
import EditFoodForm from "./EditFoodForm";

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

const EditFoodPopup = ({
  currentFoodId,
  setCurrentFoodId,
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
            "Edit food details"
          </Typography>
          <Custom.ActionButton
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
              setCurrentFoodId(0);
            }}
          >
            <CloseIcon />
          </Custom.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <EditFoodForm
          currentFoodId={currentFoodId}
          setCurrentFoodId={setCurrentFoodId}
          setOpenPopup={setOpenPopup}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditFoodPopup;
