import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
} from "@material-ui/core";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getEvents, getEventTable } from "../../../actions/events";
import { Button } from "@material-ui/core";
import { deleteEvent } from "../../../actions/events";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";

const EventTable = (props) => {
  const dispatch = useDispatch();
  const pages = 8;
  const [page, setPage] = React.useState(0);
  const { event, editInPopup } = props;
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = React.useState(pages);

  useEffect(() => {
    console.log(events);
    dispatch(getEventTable());
  }, []);

  const { events, isLoading } = useSelector((state) => state.events);

  if (!events.length && !isLoading) return "No events";

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper className={classes.paper}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className={classes.row}>
              <TableCell>Title</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Venue</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event._id}>
                <TableCell component="th" scope="row">
                  {event.title}
                </TableCell>
                <TableCell>
                  {moment(event.startDate).format("DD/MM/YY h:mma")}
                  <br />
                  {moment(event.endDate).format("DD/MM/YY h:mma")}
                </TableCell>
                <TableCell>{event.venue}</TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      editInPopup(event);
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="secondary"
                    onClick={() => dispatch(deleteEvent(event._id))}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[8]}
        component="div"
        count={events.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
};

export default EventTable;
