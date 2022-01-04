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
  Button,
  Typography,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import moment from "moment";

import {
  getPendingForumReports,
  removeReportedTopic,
  removeReportedPost,
  ignoreReportedContent,
} from "../../../actions/forumReports";
import useStyles from "./TableStyles";
import Input from "../../Custom/Input";
import useTable from "../../Custom/useTable";

const PendingForumReportsTable = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { pendingReports, isLoading } = useSelector(
    (state) => state.forumReports
  );

  useEffect(() => {
    dispatch(getPendingForumReports());
  }, [dispatch]);

  const headCells = [
    { id: "number", label: "No.", disableSorting: "true" },
    { id: "content", label: "Content", disableSorting: "true" },
    { id: "reportRemark", label: "Remarks", disableSorting: "true" },
    { id: "numberOfReports", label: "No. of Reports", disableSorting: "true" },
    { id: "submittedOn", label: "Submitted on", disableSorting: "true" },
    { id: "actions", label: "Actions", disableSorting: "true" },
  ];

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(pendingReports, headCells, filterFn);
  
  if (!pendingReports?.length && !isLoading) {
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
              x.reportedContent.toLowerCase().includes(target.value.toLowerCase()) ||
              x.reportRemark.toLowerCase().includes(target.value.toLowerCase())
          );
      },
    });
  };

  const removeContent = (report) => {
    if (report?.contentType === "post") {
      dispatch(
        removeReportedPost(
          report?._id,
          report?.reportedContentId,
          report,
        )
      );
    }
    else if (report?.contentType === "topic") {
      dispatch(
        removeReportedTopic(report?._id,
          report?.reportedContentId,
          report,
        )
      );
    }
  };

  const ignoreReport = (report) => {
    dispatch(ignoreReportedContent(report?._id));
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
                <TableCell width="35%">
                  <Typography
                    variant="body2"
                    className={classes.reportedContent}
                  >
                    {report?.contentType === "post" && report?.reportedContent}
                    {report?.contentType === "topic" && (
                      <a
                        href={report?.reportedContentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.link}
                      >
                        {report?.reportedContent}
                      </a>
                    )}
                  </Typography>
                </TableCell>
                <TableCell width="20%">
                  <Typography variant="body2">
                    {report?.reportRemark}
                  </Typography>
                </TableCell>
                <TableCell width="10%">{report?.reporterList.length}</TableCell>
                <TableCell width="10%">
                  {moment(report?.createdAt).format("DD MMM YYYY")}
                </TableCell>
                <TableCell width="20%">
                  <Button
                    className={classes.removeButton}
                    color="secondary"
                    variant="contained"
                    size="small"
                    fullWidth
                    onClick={() => removeContent(report)}
                  >
                    Remove content
                  </Button>
                  <Box mt={1} />
                  <Button
                    className={classes.ignoreButton}
                    color="secondary"
                    variant="outlined"
                    size="small"
                    fullWidth
                    onClick={() => ignoreReport(report)}
                  >
                    Ignore report
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  );

};

export default PendingForumReportsTable;