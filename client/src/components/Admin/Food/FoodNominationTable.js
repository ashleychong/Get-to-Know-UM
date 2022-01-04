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
  Chip,
  Avatar,
  CircularProgress,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Search, ArrowForward, Edit, Delete } from "@material-ui/icons";
import moment from "moment";

import useStyles from "./FoodNominationTableStyles";
import Input from "../../Custom/Input";
import {
  getFoodNominations,
  deleteFoodNomination,
} from "../../../actions/foodNominations";
import useTable from "../../Custom/useTable";
import EditFoodPopup from "./EditFoodPopup";

const FoodNominationTable = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  const [currentFoodNominationId, setCurrentFoodNominationId] = useState(0);
  const { foodNominations, isLoading } = useSelector(
    (state) => state.foodNominations
  );

  useEffect(() => {
    dispatch(getFoodNominations());
  }, [dispatch]);

  const editInPopup = (foodNominationId) => {
    setCurrentFoodNominationId(foodNominationId);
    setOpenPopup(true);
  };

  const headCells = [
    { id: "number", label: "No.", disableSorting: "true" },
    { id: "food", label: "Food" },
    { id: "image", label: "Image", disableSorting: "true" },
    { id: "approvalStatus", label: "Approval Status", disableSorting: "true" },
    { id: "date", label: "Date", disableSorting: "true" },
    { id: "actions", label: "Actions", disableSorting: "true" },
  ];

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(foodNominations, headCells, filterFn);

  if (!foodNominations?.length && !isLoading) {
    return (
      <Box mx={2} my={3}>
        <Box mx={2} my={3}>
          <Typography>No nominated food yet.</Typography>
        </Box>
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
            x.foodName.toLowerCase().includes(target.value.toLowerCase())
          );
      },
    });
  };

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Box sx={{ width: "100%" }}>
      <Paper className={classes.paper} sx={{ width: "100%" }}>
        <Toolbar>
          <Input
            label="Search food nomination"
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
            {recordsAfterPagingAndSorting().map((foodNomination, index) => (
              <TableRow key={foodNomination._id}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{foodNomination?.foodName}</TableCell>
                <TableCell>
                  <Avatar
                    src={
                      foodNomination?.image ||
                      "https://source.unsplash.com/random"
                    }
                    alt={foodNomination?.name}
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={foodNomination?.status}
                    size="small"
                    className={
                      classes[foodNomination?.status] + " " + classes.chip
                    }
                  />
                </TableCell>
                <TableCell>
                  {moment(foodNomination?.createdAt).format("DD MMM YYYY")}
                </TableCell>
                <TableCell>
                  {foodNomination?.status === "pending" && (
                    <IconButton
                      size="small"
                      color="default"
                      component={Link}
                      to={`/admin/foodNominations/${foodNomination?._id}`}
                    >
                      <ArrowForward />
                    </IconButton>
                  )}
                  {foodNomination?.status === "approved" && (
                    <>
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          editInPopup(foodNomination?._id);
                        }}
                      >
                        <Edit fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="secondary"
                        onClick={() =>
                          dispatch(deleteFoodNomination(foodNomination?._id))
                        }
                      >
                        <Delete fontSize="small" />
                      </IconButton>
                    </>
                  )}
                  {foodNomination?.status === "declined" && (
                    <IconButton
                      size="small"
                      color="secondary"
                      onClick={() =>
                        dispatch(deleteFoodNomination(foodNomination?._id))
                      }
                    >
                      <Delete />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <EditFoodPopup
        currentFoodNominationId={currentFoodNominationId}
        setCurrentFoodNominationId={setCurrentFoodNominationId}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      />
    </Box>
  );
};

export default FoodNominationTable;
