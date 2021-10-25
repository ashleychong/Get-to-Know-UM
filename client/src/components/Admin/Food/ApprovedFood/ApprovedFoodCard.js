import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";

import useStyles from "./ApprovedFoodCardStyles";
import { updateFood, deleteFood } from "../../../../actions/food";

export default function ApprovedFoodCard(props) {
  const { food, editInPopup } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={food.image}
        title={food.foodName}
      />
      <div className={classes.ranking}>
        <Typography component="h6">1</Typography>
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {food.foodName}
          </Typography>
          <div>
            <IconButton
              size="small"
              color="primary"
              onClick={(e) => {
                e.stopPropagation();
                editInPopup(food);
              }}
            >
              <EditIcon fontsize="small" />
            </IconButton>
            <IconButton>
              <DeleteIcon fontsize="small" />
            </IconButton>
          </div>
        </CardContent>
        <div className={classes.desc}>
          <Typography variant="body1" color="textSecondary">
            {food.description}
          </Typography>
        </div>
      </div>
    </Card>
  );
}
