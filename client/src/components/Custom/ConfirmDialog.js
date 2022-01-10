import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  makeStyles,
  IconButton,
  Button,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CloseIcon from "@material-ui/icons/Close";
import Custom from "./Custom";

const useStyles = makeStyles((theme) => ({
  dialog: {
    margin: "auto",
  },
  dialogTitle: {
    textAlign: "center",
  },
  dialogContent: {
    textAlign: "center",
    marginTop: "0.5rem",
    marginBottom: "0.7rem",
  },
  dialogAction: {
    justifyContent: "center",
    marginBottom: "5px",
  },
  titleIcon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      cursor: "default",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "80px",
    },
  },
}));

export default function ConfirmDialog(props) {
  const { confirmDialog, setConfirmDialog } = props;
  const classes = useStyles();

  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "0.5rem" }}>
          <Custom.ActionButton
            color="secondary"
            onClick={() =>
              setConfirmDialog({ ...confirmDialog, isOpen: false })
            }
          >
            <CloseIcon />
          </Custom.ActionButton>
        </div>
        <IconButton disableRipple className={classes.titleIcon}>
          <DeleteForeverIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle2">{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        <Custom.Button
          variant="contained"
          color="secondary"
          onClick={confirmDialog.onConfirm}
          text="Yes"
        />
        <Custom.Button
          variant="outlined"
          color="primary"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
          text="No"
        />
      </DialogActions>
    </Dialog>
  );
}
