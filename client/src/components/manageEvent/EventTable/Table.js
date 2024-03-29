import React, { useEffect, useState } from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Paper,
  IconButton,
  Toolbar,
  InputAdornment,
  Chip,
  Avatar,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getEventTable } from "../../../actions/events";
import { deleteEvent } from "../../../actions/events";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import { Search } from "@material-ui/icons";
import Input from "../../Custom/Input";
import useTable from "../../Custom/useTable";
import ConfirmDialog from "../../Custom/ConfirmDialog";

const EventTable = (props) => {
  const dispatch = useDispatch();
  const { event, editInPopup } = props;
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const { events, isLoading } = useSelector((state) => state.events);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const headCells = [
    { id: "no", label: "No.", disableSorting: "true" },
    { id: "title", label: "Title" },
    { id: "img", label: "Image", disableSorting: "true" },
    { id: "date", label: "Date", disableSorting: "true" },
    { id: "status", label: "Status", disableSorting: "true" },
    { id: "action", label: "Action", disableSorting: "true" },
  ];
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(events, headCells, filterFn);

  useEffect(() => {
    dispatch(getEventTable(user.result.role));
  }, []);

  if (!events.length && !isLoading)
    return (
      <Typography
        style={{ textAlign: "center", fontSize: "20px", marginTop: "10px" }}
      >
        No event found.
      </Typography>
    );

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.title.toLowerCase().includes(target.value.toLowerCase())
          );
      },
    });
  };

  const confirmRemove = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    dispatch(deleteEvent(id));
  };

  return (
    <>
      <Paper className={classes.paper}>
        <Toolbar>
          <Input
            label="Search Event"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
        </Toolbar>
        <TblContainer>
          <TblHead className={classes.row} />
          <TableBody>
            {recordsAfterPagingAndSorting().map((event, index) => (
              <TableRow key={event._id}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {event.title}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Avatar
                    src={event?.img || "https://source.unsplash.com/random"}
                    alt={event?.img}
                  />
                </TableCell>
                <TableCell>
                  {moment(event.startDate).format("DD/MM/YY h:mma")}
                  <br />
                  {moment(event.endDate).format("DD/MM/YY h:mma")}
                </TableCell>
                <TableCell>
                  {event.startDate &&
                  event.endDate < new Date().toISOString() ? (
                    <Chip
                      label="Expired"
                      className={classes.statusExpired}
                      size="small"
                    />
                  ) : (
                    <Chip
                      label="Upcoming"
                      className={classes.statusUpcoming}
                      size="small"
                    />
                  )}
                </TableCell>
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
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: "Are you sure to delete this record?",
                        subTitle: "You can't undo this operation",
                        onConfirm: () => {
                          confirmRemove(event._id);
                        },
                      });
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
};

export default EventTable;
