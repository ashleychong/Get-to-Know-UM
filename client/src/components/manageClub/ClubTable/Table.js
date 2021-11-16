import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
} from "@material-ui/core";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getClubs } from "../../../actions/clubs";
import { Button } from "@material-ui/core";
import { deleteClub } from "../../../actions/clubs";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";

const ClubTable = (props) => {
  const dispatch = useDispatch();
  const pages = 8;
  const [page, setPage] = React.useState(0);
  const { club, editInPopup } = props;
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = React.useState(pages);

  useEffect(() => {
    dispatch(getClubs());
    console.log(clubs);
  }, [dispatch]);

  const { clubs, isLoading } = useSelector((state) => state.clubs);

  if (!clubs.length && !isLoading) return "No clubs";

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper className={classes.paper}>
      <TableContainer className={classes.container}>
        <Table>
          <TableHead>
            <TableRow className={classes.row}>
              <TableCell>Title</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clubs.map((club) => (
              <TableRow key={club._id}>
                <TableCell component="th" scope="row">
                  {club.title}
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
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[8]}
        component="div"
        count={clubs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
};

export default ClubTable;
