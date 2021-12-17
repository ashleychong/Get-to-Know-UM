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
} from "@material-ui/core";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getLeisureTable, deleteLeisure } from "../../../actions/leisure";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Search } from "@material-ui/icons";
import Input from "../../Custom/Input";
import useTable from "../../Custom/useTable";

const LeisureTable = (props) => {
  const dispatch = useDispatch();
  const { editInPopup } = props;
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const leisures = useSelector((state) => state.leisures);
  const headCells = [
    { id: "no", label: "No.", disableSorting: "true" },
    { id: "title", label: "Title" },
    { id: "img", label: "Image", disableSorting: "true" },
    { id: "category", label: "Category", disableSorting: "true" },
    { id: "action", label: "Action", disableSorting: "true" },
  ];
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(leisures, headCells, filterFn);

  useEffect(() => {
    dispatch(getLeisureTable(user.result.role));
  }, []);

  if (!leisures.length) return "No leisures";

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
          label="Search Leisure"
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
          {recordsAfterPagingAndSorting().map((leisure, index) => (
            <TableRow key={leisure._id}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell component="th" scope="row">
                {leisure.title}
              </TableCell>
              <TableCell component="th" scope="row">
                <Avatar
                  src={
                    leisure.img
                      ? leisure.img
                      : "https://source.unsplash.com/random"
                  }
                  alt={leisure?.img}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {leisure.category}
              </TableCell>
              <TableCell>
                <IconButton
                  size="small"
                  color="primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    editInPopup(leisure);
                  }}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  color="secondary"
                  onClick={() => dispatch(deleteLeisure(leisure._id))}
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

export default LeisureTable;
