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

import FoodNominationRows from './FoodNominationTableRows';
import { getFoodNominations } from "../../../actions/foodNominations";

const FoodNominationTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodNominations());
  }, [dispatch]);

  return (
    <Fragment>
        <CardContent className="p-3">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Food Name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              <FoodNominationRows/>
            </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
    </Fragment>
  );
};

export default FoodNominationTable;
