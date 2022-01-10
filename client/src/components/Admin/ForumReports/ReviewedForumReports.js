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
  CircularProgress,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Search, Delete } from "@material-ui/icons";
import moment from "moment";

import {
  getReviewedForumReports,
  deleteForumReport,
} from "../../../actions/forumReports";
import useStyles from "./TableStyles";
import Input from "../../Custom/Input";
import useTable from "../../Custom/useTable";
import Custom from "../../Custom/Custom";

const ReviewedForumReportsTable = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { reviewedReports, isLoading } = useSelector(
    (state) => state.forumReports
  );
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  useEffect(() => {
    dispatch(getReviewedForumReports());
  }, [dispatch]);

  const headCells = [
    { id: "number", label: "No.", disableSorting: "true" },
    { id: "content", label: "Content", disableSorting: "true" },
    { id: "reviewRemark", label: "Review Remarks" },
    { id: "reviewDate", label: "Reviewed on" },
    { id: "actions", label: "Actions", disableSorting: "true" },
  ];

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(reviewedReports, headCells, filterFn);

  const confirmRemove = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    dispatch(deleteForumReport(id));
  };

  if (!reviewedReports?.length && !isLoading) {
    return (
      <Box mx={2} my={3}>
        <Box mx={2} my={3}>
          <Typography>No reports found.</Typography>
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
          return items.filter(
            (x) =>
              x.reportedContent
                .toLowerCase()
                .includes(target.value.toLowerCase()) ||
              x.reviewRemark.toLowerCase().includes(target.value.toLowerCase())
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
            label="Search"
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
            {recordsAfterPagingAndSorting().map((report, index) => (
              <TableRow key={report._id}>
                <TableCell width="5%">{index + 1}</TableCell>
                <TableCell width="40%">
                  <Typography
                    variant="body2"
                    className={classes.reportedContent}
                  >
                    {report?.reportedContent}
                  </Typography>
                </TableCell>
                <TableCell width="20%">
                  <Typography variant="body2">
                    {report?.reviewRemark}
                  </Typography>
                </TableCell>
                <TableCell width="15%">
                  {moment(report?.reviewDate).format("DD MMM YYYY")}
                </TableCell>
                <TableCell width="10%">
                  <IconButton
                    size="small"
                    color="secondary"
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: "Are you sure to delete this record?",
                        subTitle: "You can't undo this operation",
                        onConfirm: () => {
                          confirmRemove(report?._id);
                        },
                      });
                    }}
                  >
                    <Delete fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Custom.ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
};

export default ReviewedForumReportsTable;
