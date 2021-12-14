import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, CardMedia, CardContent, CardActions, Button, ButtonBase, Fab, Typography, Link } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";


import useStyles from "./CafeCardStyles";
import { deleteCafe } from "../../../actions/cafe";

const CafeCard = ({ cafeId, imgSrc, imgAlt, title, desc, pagePath, editInPopup }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      {/* <CardMedia style={{ height: 270 }} image={imgSrc} title={imgAlt} />
      <div className={classes.overlay} name="edit">
        <Fab
          onClick={(e) => {
            e.stopPropagation();
            editInPopup(cafeId);
          }}
          size="small"
          className={classes.fab}
        >
          <MoreVertIcon fontSize="default" />
        </Fab>
      </div>
      <CardContent>
        <Typography component="h3" variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {desc}
        </Typography>
      </CardContent> */}
      <ButtonBase
        component="span"
        // onClick={openCafe}
        style={{ display: "block", textAlign: "initial" }}
      >
        <CardMedia style={{ height: 270 }} image={imgSrc} title={imgAlt} />
        <CardContent>
          <Typography component="h3" variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {desc}
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        {/* <Link href={pagePath} underline="none">
          Read more
        </Link> */}
        <EditIcon
          fontSize="small"
          onClick={(e) => {
            e.stopPropagation();
            editInPopup(cafeId);
          }}
        />
        <DeleteIcon
          fontSize="small"
          color="secondary"
          onClick={() => dispatch(deleteCafe(cafeId))}
        />
      </CardActions>
    </Card>
  );
};

export default CafeCard;
