import React from 'react';
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import Custom from "../Custom/Custom";
import CourseForm from "./CourseForm";

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

const CoursePopup = ({
  currentCourseId,
  setCurrentCourseId,
  openPopup,
  setOpenPopup,
}) => {
    const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: "flex" }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {currentCourseId ? "Edit course" : "Create a new course"}
                    </Typography>
                    <Custom.ActionButton
                        color="secondary"
                        onClick={() => {
                            setOpenPopup(false);
                            setCurrentCourseId(0);
                        }}
                    >
                        <CloseIcon />
                    </Custom.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                <CourseForm
                    currentCourseId={currentCourseId}
                    setCurrentCourseId={setCurrentCourseId}
                    setOpenPopup={setOpenPopup}
                />
            </DialogContent>
        </Dialog>
    );
};

export default CoursePopup;