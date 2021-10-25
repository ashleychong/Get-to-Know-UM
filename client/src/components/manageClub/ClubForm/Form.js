import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import useStyles from "./style";
import { createClub, updateClub } from "../../../actions/clubs";

const ClubForm = ({ currentId, setCurrentId }) => {
  const [clubData, setClubData] = useState({
    title: "",
    about: "",
    event: "",
    contact: "",
    img: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateClub(currentId, clubData));
    } else {
      dispatch(createClub(clubData));
    }

    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setClubData({
      title: "",
      about: "",
      event: "",
      contact: "",
      img: "",
    });
  };

  const classes = useStyles();
  const dispatch = useDispatch();
  const club = useSelector((state) =>
    currentId ? state.clubs.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (club) setClubData(club);
  }, [club]);

  return (
    <Paper className={classes.paper}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Typography className={classes.font} align="center" variant="h5">
          {currentId ? "Edit" : "Add New"} Club
        </Typography>
        <div className={classes.form}>
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            required
            value={clubData.title}
            onChange={(e) =>
              setClubData({ ...clubData, title: e.target.value })
            }
          />
          <TextField
            name="about"
            variant="outlined"
            label="About"
            multiline
            rows="6"
            fullWidth
            value={clubData.about}
            onChange={(e) =>
              setClubData({ ...clubData, about: e.target.value })
            }
          />
          <TextField
            name="event"
            variant="outlined"
            label="Event"
            multiline
            rows="6"
            fullWidth
            value={clubData.event}
            onChange={(e) =>
              setClubData({ ...clubData, event: e.target.value })
            }
          />
          <TextField
            name="contact"
            variant="outlined"
            label="Contact"
            fullWidth
            required
            value={clubData.contact}
            onChange={(e) =>
              setClubData({ ...clubData, contact: e.target.value })
            }
          />
          <div className={classes.filebase}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setClubData({ ...clubData, img: base64 })}
            />
          </div>
        </div>
        <div className={classes.button}>
          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            size="medium"
            type="submit"
          >
            Submit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="medium"
            onClick={clear}
          >
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default ClubForm;
