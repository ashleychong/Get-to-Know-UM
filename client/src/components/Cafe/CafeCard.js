import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core";

const CafeCard = ({ imgSrc, imgAlt, title, desc, pagePath }) => {
  const history = useHistory();

  const openCafe = (e) => {
    e.stopPropagation();
    history.push(pagePath);
  }

  return (
    <Card style={{ height: "100%" }}>
      <ButtonBase
        component="span"
        onClick={openCafe}
        style={{ display: "block", textAlign: "initial", height: "100%" }}
      >
        <CardMedia style={{ height: 270 }} image={imgSrc} title={imgAlt} />
        <CardContent>
          <Typography component="h3" variant="h5" gutterBottom color="primary">
            {title}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary">
            {desc}
          </Typography> */}
        </CardContent>
      </ButtonBase>
    </Card>
  );
};

export default CafeCard;
