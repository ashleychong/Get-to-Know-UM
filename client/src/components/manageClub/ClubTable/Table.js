import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getClubs } from "../../../actions/clubs";
import { Button } from "@material-ui/core";
import { deleteClub } from "../../../actions/clubs";

const ClubTable = ({ setCurrentId }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(getClubs());
  }, []);

  const clubs = useSelector((state) => state.clubs);
  return (
    <Paper className={classes.paper}>
      <TableContainer>
        <Table>
          <TableHead className={classes.head}>
            <TableRow>
              <TableCell className={classes.cell}>Title</TableCell>
              <TableCell className={classes.cell}>Contact</TableCell>
              <TableCell className={classes.cell} align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clubs.map((club) => (
              <TableRow key={club._id}>
                <TableCell component="th" scope="row">
                  {club.title}
                </TableCell>
                <TableCell>{club.contact}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => setCurrentId(club._id)}>Edit</Button> |{" "}
                  <Button onClick={() => dispatch(deleteClub(club._id))}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ClubTable;
