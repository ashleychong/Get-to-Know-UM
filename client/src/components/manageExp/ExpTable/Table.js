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
import { getExpTable, deleteExp } from "../../../actions/experience";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Search } from "@material-ui/icons";
import Input from "../../Custom/Input";
import useTable from "../../Custom/useTable";

const ExpTable = (props) => {
  const dispatch = useDispatch();
  const { editInPopup } = props;
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const exps = useSelector((state) => state.exps);
  const headCells = [
    { id: "title", label: "Title" },
    { id: "status", label: "Status", disableSorting: "true" },
    { id: "action", label: "Action", disableSorting: "true" },
  ];
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(exps, headCells, filterFn);

  useEffect(() => {
    dispatch(getExpTable(user.result.role));
  }, []);

  if (!exps.length) return "No experience";

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
          label="Search Experience"
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
          {recordsAfterPagingAndSorting().map((exp) => (
            <TableRow key={exp._id}>
              <TableCell component="th" scope="row">
                {exp.title}
              </TableCell>
              <TableCell>
                {exp.status == "disapprove" ? (
                  <Chip
                    label="Disapprove"
                    className={classes.statusExpired}
                    size="small"
                  />
                ) : (
                  <Chip
                    label="Approve"
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
                    editInPopup(exp);
                  }}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  color="secondary"
                  onClick={() => dispatch(deleteExp(exp._id))}
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

export default ExpTable;
