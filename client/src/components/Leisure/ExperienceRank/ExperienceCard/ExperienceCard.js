import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@material-ui/core";
import useStyles from "./style";

const ExperienceCard = (exp) => {
  console.log(exp.exp.img);
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <div className={classes.info}>
          {/* <CardMedia className={classes.img} image={exp.exp.img} /> */}
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {exp.exp.title}
            </Typography>
            <Typography
              align="justify"
              variant="subtitle1"
              color="textSecondary"
            >
              {exp.exp.description}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default ExperienceCard;
