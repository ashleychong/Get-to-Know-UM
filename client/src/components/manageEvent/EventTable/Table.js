import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../../actions/events";
import { Button } from "@material-ui/core";
import { deleteEvent } from "../../../actions/events";

const EventTable = ({ setCurrentId }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const events = useSelector((state) => state.events);

  return (
    <Paper className={classes.paper}>
      <TableContainer>
        <Table>
          <TableHead className={classes.head}>
            <TableRow>
              <TableCell className={classes.cell}>Title</TableCell>
              <TableCell className={classes.cell} align="right">
                Date
              </TableCell>
              <TableCell className={classes.cell} align="right">
                Venue
              </TableCell>
              <TableCell className={classes.cell} align="right">
                Contact
              </TableCell>
              <TableCell className={classes.cell} align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event._id}>
                <TableCell component="th" scope="row">
                  {event.title}
                </TableCell>
                <TableCell align="right">
                  {event.startDate}
                  <br />
                  {event.endDate}
                </TableCell>
                <TableCell align="right">{event.venue}</TableCell>
                <TableCell align="right">{event.contact}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => setCurrentId(event._id)}>Edit</Button>{" "}
                  |{" "}
                  <Button onClick={() => dispatch(deleteEvent(event._id))}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default EventTable;
