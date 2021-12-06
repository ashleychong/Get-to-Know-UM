import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, CardMedia, CardContent, CardActions, Button, Fab, Typography, Link } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";

import useStyles from "./CafeCardStyles";
import { deleteCafe } from "../../../actions/cafe";

const CafeCard = ({ cafeId, imgSrc, imgAlt, title, desc, pagePath, editInPopup }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia style={{ height: 270 }} image={imgSrc} title={imgAlt} />
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
      </CardContent>
      <CardActions className={classes.cardActions}>
        {/* <Link href={pagePath} underline="none">
          Read more
        </Link> */}
        <Button component={Link} to={pagePath} size="small">
          Learn More
        </Button>
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
