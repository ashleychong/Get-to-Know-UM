import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Grid,
  DialogActions,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./style";
import { createExp, getExps } from "../../../../actions/experience";
import FileBase from "react-file-base64";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

const ExperienceRank = () => {
  const experience = useSelector((state) => state.experience);

  useEffect(() => {
    dispatch(getExps());
  }, []);

  const dispatch = useDispatch();
  const [expData, setExpData] = useState({
    title: "",
    description: "",
  });
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleShare = async (e) => {
    e.preventDefault();
    dispatch(createExp(expData));
    clear();
    setOpen(false);
  };
  const clear = () => {
    setExpData({
      title: "",
      description: "",
      img: "",
    });
  };
  return (
    <>
      <Grid container>
        <Grid item xs={6} className={classes.root}>
          <Typography className={classes.title} variant="h5">
            Must Do Things For UM Students
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.root}>
          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            size="medium"
            onClick={handleClickOpen}
          >
            Share Experience
          </Button>
        </Grid>
        {experience.map((exp) => (
          <Grid item key={exp._id} xs={12} className={classes.card}>
            <ExperienceCard exp={exp} />
          </Grid>
        ))}
      </Grid>

      <Dialog maxWidth={"md"} open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Share Your Experience</DialogTitle>
        <DialogContent>
          <DialogContentText>
            In your opinion, what is the must do things for UM students?
          </DialogContentText>
          <div className={classes.form}>
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              label="Title"
              required
              fullWidth
              value={expData.title}
              onChange={(e) =>
                setExpData({ ...expData, title: e.target.value })
              }
            />
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              label="Description"
              rows="5"
              multiline
              required
              fullWidth
              value={expData.description}
              onChange={(e) =>
                setExpData({ ...expData, description: e.target.value })
              }
            />
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setExpData({ ...expData, img: base64 })}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleShare} color="primary">
            Share
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ExperienceRank;
