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
} from "@material-ui/core";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { deleteClub, getClubTable } from "../../../actions/clubs";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import useTable from "../../Custom/useTable";
import { Search } from "@material-ui/icons";
import Input from "../../Custom/Input";

const ClubTable = (props) => {
  const dispatch = useDispatch();
  const { club, editInPopup } = props;
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  const { clubs, isLoading } = useSelector((state) => state.clubs);

  const headCells = [
    { id: "title", label: "Title" },
    { id: "registration", label: "Registration", disableSorting: "true" },
    { id: "action", label: "Action", disableSorting: "true" },
  ];
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(clubs, headCells, filterFn);

  useEffect(() => {
    dispatch(getClubTable(user.result.role));
  }, [dispatch]);

  if (!clubs.length && !isLoading) return "No clubs";

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.title.toLowerCase().includes(target.value.toLowerCase())
          );
      },
    });
  };

  return (
    <Paper className={classes.paper}>
      <Toolbar>
        <Input
          label="Search Club"
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
          {recordsAfterPagingAndSorting().map((club) => (
            <TableRow key={club._id}>
              <TableCell component="th" scope="row">
                {club.title}
              </TableCell>
              <TableCell>
                {club.clublink ? (
                  <Chip
                    label="Available"
                    className={classes.status2}
                    size="small"
                  />
                ) : (
                  <Chip
                    label="Unavailable"
                    className={classes.status1}
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
                    editInPopup(club);
                  }}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  color="secondary"
                  onClick={() => dispatch(deleteClub(club._id))}
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
  );
};

export default ClubTable;
