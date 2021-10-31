import React from "react";
import { Typography, Card, ButtonBase, Grid } from "@material-ui/core";
import useStyles from "./style";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Leisure = () => {
  const leisure = useSelector((state) => state.leisure);
  const history = useHistory();
  const navigateInUM = () => history.push(`/leisure/inUM`);
  const navigateNearUM = () => history.push(`/leisure/nearUM`);
  const navigateRanking = () => history.push(`/leisure/ranking`);
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} variant="h5">
        Category
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Card className={classes.card1}>
            <ButtonBase className={classes.buttonBase} onClick={navigateInUM}>
              <Typography variant="h6" color="textSecondary">
                Things to do in UM
              </Typography>
            </ButtonBase>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card1}>
            <ButtonBase className={classes.buttonBase} onClick={navigateNearUM}>
              <Typography variant="h6" color="textSecondary">
                Things to do near UM
              </Typography>
            </ButtonBase>
          </Card>
        </Grid>
        <Typography className={classes.title} variant="h5">
          Ranking
        </Typography>
        <Grid item xs={12}>
          <Card className={classes.card2}>
            <ButtonBase
              className={classes.buttonBase}
              onClick={navigateRanking}
            >
              <Typography variant="h6" color="textSecondary">
                Must Do Things for UM Students
              </Typography>
            </ButtonBase>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default Leisure;
