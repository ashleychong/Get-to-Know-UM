import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
  Toolbar,
  InputAdornment,
  Avatar,
  CircularProgress,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Search, Edit, Delete } from "@material-ui/icons";

import useStyles from "./CafeTableStyles";
import Input from "../../Custom/Input";
import { getAllCafes, deleteCafe } from "../../../actions/cafe";
import useTable from "../../Custom/useTable";
import CafePopup from "./CafePopup";
import Custom from "../../Custom/Custom";

const CafeTable = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  const [currentCafeId, setCurrentCafeId] = useState(0);
  const { cafes, isLoading } = useSelector((state) => state.cafes);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  useEffect(() => {
    dispatch(getAllCafes());
  }, [dispatch]);

  const editInPopup = (cafeId) => {
    setCurrentCafeId(cafeId);
    setOpenPopup(true);
  };

  const headCells = [
    { id: "number", label: "No.", disableSorting: "true" },
    { id: "title", label: "title" },
    { id: "image", label: "Image", disableSorting: "true" },
    { id: "actions", label: "Actions", disableSorting: "true" },
  ];

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(cafes, headCells, filterFn);

  const confirmRemove = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    dispatch(deleteCafe(id));
  };

  if (!cafes?.length && !isLoading) {
    return (
      <Box mx={2} my={3}>
        <Typography>No cafes yet.</Typography>
      </Box>
    );
  }

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

  return isLoading ? (
    <CircularProgress />
  ) : (
    <>
      <Paper className={classes.paper}>
        <Toolbar>
          <Input
            label="Search cafe"
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
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((cafe, index) => (
              <TableRow key={cafe._id}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{cafe?.title}</TableCell>
                <TableCell>
                  <Avatar
                    src={cafe?.image || "https://source.unsplash.com/random"}
                    alt={cafe?.name}
                  />
                </TableCell>
                <TableCell>
                  <>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        editInPopup(cafe?._id);
                      }}
                    >
                      <Edit fontSize="small" />
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
                            confirmRemove(cafe?._id);
                          },
                        });
                      }}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <CafePopup
        currentCafeId={currentCafeId}
        setCurrentCafeId={setCurrentCafeId}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      />
      <Custom.ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
};

export default CafeTable;
