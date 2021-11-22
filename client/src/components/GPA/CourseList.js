import React from "react";
import {
  Button,
  TableContainer,
  Table,
  TableBody,
  Divider,
  Typography,
  TableRow,
  TableCell,
  TableHead,
} from "@material-ui/core/";
import useStyles from "./style";
import CourseItem from "./CourseItem";

const CourseList = ({
  inputs,
  handleDelete,
  handleEdit,
  clearItems,
  calculate,
}) => {
  const classes = useStyles();

  return (
    inputs.length > 0 && (
      <>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell>Credit Hour</TableCell>
              <TableCell>Grade Point</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inputs.map((input) => {
              return (
                <CourseItem
                  key={input.id}
                  input={input}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              );
            })}
          </TableBody>
        </Table>
        <div className={classes.btnGroup}>
          <Button
            style={{ marginRight: "80px" }}
            variant="contained"
            color="primary"
            size="medium"
            onClick={calculate}
          >
            Calculate
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="medium"
            onClick={clearItems}
          >
            Clear
          </Button>
        </div>
      </>
    )
  );
};

export default CourseList;
