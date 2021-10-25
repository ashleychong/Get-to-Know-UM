import React from "react";
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import Custom from "../Custom/Custom";
import EditProfileForm from "./EditProfileForm";

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

const EditProfilePopup = ({ openUpdateProfilePopup, setOpenUpdateProfilePopup }) => {
    const classes = useStyles();

    return (
      <Dialog
        open={openUpdateProfilePopup}
        maxWidth="md"
        classes={{ paper: classes.dialogWrapper }}
      >
        <DialogTitle className={classes.dialogTitle}>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              Edit Profile
            </Typography>
            <Custom.ActionButton
              color="secondary"
              onClick={() => {
                setOpenUpdateProfilePopup(false);
              }}
            >
              <CloseIcon />
            </Custom.ActionButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <EditProfileForm
            setOpenUpdateProfilePopup={setOpenUpdateProfilePopup}
          />
        </DialogContent>
      </Dialog>
    );
};

export default EditProfilePopup;