import React from 'react';
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import Custom from "../Custom/Custom";
import Form from "./Form";

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}));

const PopUp = (props) => {
    const { openPopup, setOpenPopup, currentId, setCurrentId } = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex', alignItems: "center" }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {currentId === 0 ? "Create a new topic" : "Edit topic"}
                    </Typography>
                    <Custom.ActionButton
                        color="secondary"
                        onClick={() => { setOpenPopup(false); setCurrentId(0);}}>
                        <CloseIcon />
                    </Custom.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                <Form
                    currentId={currentId}
                    setCurrentId={setCurrentId}
                    setOpenPopup={setOpenPopup} />
            </DialogContent>
        </Dialog>
    )
};

export default PopUp;
