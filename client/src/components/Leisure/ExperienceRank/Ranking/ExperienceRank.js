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
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./style";
import { createExp, getExps } from "../../../../actions/experience";
import FileBase from "react-file-base64";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

const ExperienceRank = () => {
  const exps = useSelector((state) => state.exps);
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(getExps());
  }, []);

  const dispatch = useDispatch();
  const [expData, setExpData] = useState({
    title: "",
    description: "",
    img: "",
    status: "pending",
    location: "",
    charge: "",
    duration: "",
  });
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [share, setShare] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleShare = async (e) => {
    e.preventDefault();
    dispatch(createExp({ ...expData, name: user?.result?.name }));
    clear();
    setOpen(false);
    setShare(true);
  };

  const clear = () => {
    setExpData({
      title: "",
      description: "",
      img: "",
      status: "",
      location: "",
      charge: "",
      duration: "",
    });
  };

  return (
    <>
      <Grid container>
        <Grid item xs={6} className={classes.root}>
          <Typography className={classes.title}>
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
        {[]
          .concat(exps)
          .sort((a, b) => (a.likes.length > b.likes.length ? -1 : 1))
          .filter(
            (exp) => exp.status !== "disapprove" && exp.status !== "pending"
          )
          .map((exp, index) => (
            <Grid item key={exp._id} xs={12} className={classes.card}>
              <ExperienceCard exp={exp} index={index + 1} />
            </Grid>
          ))}
      </Grid>
      {!user?.result?.name ? (
        <Dialog
          open={open}
          maxWidth="md"
          classes={{ paper: classes.dialogWrapper }}
        >
          <DialogTitle className={classes.dialogTitle}>
            <div style={{ display: "flex" }}>
              <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                Share Your Experience
              </Typography>
              <Button
                color="secondary"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon />
              </Button>
            </div>
          </DialogTitle>
          <DialogContent dividers>
            <Typography variant="h6" align="center">
              Please sign in to share your experience.
            </Typography>
          </DialogContent>
        </Dialog>
      ) : (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle id="form-dialog-title">
            <div style={{ display: "flex" }}>
              <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                Share Your Experience
              </Typography>
              <Button onClick={handleClose} color="secondary">
                <CloseIcon />
              </Button>
            </div>
          </DialogTitle>
          <DialogContent dividers>
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
              <TextField
                variant="outlined"
                margin="dense"
                label="Location"
                rows="2"
                required
                fullWidth
                value={expData.location}
                onChange={(e) =>
                  setExpData({ ...expData, location: e.target.value })
                }
              />
              <TextField
                variant="outlined"
                margin="dense"
                label="Charge"
                required
                fullWidth
                value={expData.charge}
                onChange={(e) =>
                  setExpData({ ...expData, charge: e.target.value })
                }
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Select
                  style={{ margin: "10px 0" }}
                  variant="outlined"
                  value={expData.duration}
                  label="Duration"
                  onChange={(e) =>
                    setExpData({ ...expData, duration: e.target.value })
                  }
                >
                  <MenuItem value={5}>5 minutes</MenuItem>
                  <MenuItem value={10}>10 minutes</MenuItem>
                  <MenuItem value={15}>15 minutes</MenuItem>
                  <MenuItem value={20}>20 minutes</MenuItem>
                  <MenuItem value={25}>25 minutes</MenuItem>
                  <MenuItem value={30}>30 minutes</MenuItem>
                  <MenuItem value={45}>45 minutes</MenuItem>
                  <MenuItem value={60}>60 minutes</MenuItem>
                </Select>

                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setExpData({ ...expData, img: base64 })
                  }
                />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleShare} color="primary">
              Share
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default ExperienceRank;
