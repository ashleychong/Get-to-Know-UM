import React from "react";
import { IconButton, TableCell, TableRow } from "@material-ui/core/";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const CourseItem = ({
  input: { id, course, credit, grade },
  handleDelete,
  handleEdit,
}) => {
  return (
    <>
      <TableRow>
        <TableCell>{course}</TableCell>
        <TableCell>{credit}</TableCell>
        <TableCell>{grade}</TableCell>
        <TableCell>
          <IconButton
            size="small"
            color="primary"
            onClick={() => handleEdit(id)}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="secondary"
            onClick={() => handleDelete(id)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CourseItem;
