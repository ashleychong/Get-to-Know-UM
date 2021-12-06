import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  IconButton,
  LinearProgress,
  Card,
  CardContent,
  Button,
  Tooltip,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";

import useStyles from "./FoodNominationTableStyles";
import FoodNominationRows from './FoodNominationTableRows';
import { getFoodNominations } from "../../../actions/foodNominations";

const FoodNominationTable = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getFoodNominations());
  }, [dispatch]);

  return (
    <Fragment>
        {/* <CardContent className="p-3"> */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead className={classes.MuiTableHead}>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>Food Name</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Approval Status</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              <FoodNominationRows/>
            </TableBody>
            </Table>
          </TableContainer>
        {/* </CardContent> */}
    </Fragment>
  );
};

export default FoodNominationTable;
