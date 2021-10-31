import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import useStyles from "./style";
import { createEvent, updateEvent } from "../../../actions/events";
import { useHistory, useLocation } from "react-router-dom";

const EventForm = ({ currentId, setCurrentId }) => {
  // const history = useHistory;
  const [eventData, setEventData] = useState({
    title: "",
    tags: "",
    about: "",
    startDate: "",
    endDate: "",
    venue: "",
    contact: "",
    img: "",
  });

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateEvent(currentId, eventData));
    } else {
      dispatch(createEvent(eventData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setEventData({
      title: "",
      tags: "",
      about: "",
      startDate: "",
      endDate: "",
      venue: "",
      contact: "",
      img: "",
    });
  };

  const classes = useStyles();

  const event = useSelector((state) =>
    currentId ? state.events.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (event) setEventData(event);
  }, [event]);

  return (
    <Paper className={classes.paper}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Typography className={classes.font} align="center" variant="h5">
          {currentId ? "Edit" : "Add New"} Event
        </Typography>
        <div className={classes.form}>
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            required
            value={eventData.title}
            onChange={(e) =>
              setEventData({ ...eventData, title: e.target.value })
            }
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            required
            value={eventData.tags}
            onChange={(e) =>
              setEventData({ ...eventData, tags: e.target.value })
            }
          />
          <TextField
            name="about"
            variant="outlined"
            label="About"
            multiline
            rows="6"
            fullWidth
            value={eventData.about}
            onChange={(e) =>
              setEventData({ ...eventData, about: e.target.value })
            }
          />
          <TextField
            label=" Start Date"
            type="datetime-local"
            variant="outlined"
            required
            value={eventData.startDate}
            onChange={(e) =>
              setEventData({ ...eventData, startDate: e.target.value })
            }
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label=" End Date"
            type="datetime-local"
            variant="outlined"
            required
            value={eventData.endDate}
            onChange={(e) =>
              setEventData({ ...eventData, endDate: e.target.value })
            }
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name="venue"
            variant="outlined"
            label="Venue"
            fullWidth
            required
            value={eventData.venue}
            onChange={(e) =>
              setEventData({ ...eventData, venue: e.target.value })
            }
          />
          <TextField
            name="contact"
            variant="outlined"
            label="Contact"
            fullWidth
            required
            value={eventData.contact}
            onChange={(e) =>
              setEventData({ ...eventData, contact: e.target.value })
            }
          />
          <div className={classes.filebase}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setEventData({ ...eventData, img: base64 })
              }
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

export default EventForm;
