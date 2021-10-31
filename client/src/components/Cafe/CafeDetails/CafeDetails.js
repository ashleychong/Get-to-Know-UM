import React, { useState, useEffect } from "react";
import {
  CssBaseline,
  Grid,
  Typography,
  Card,
  Divider,
  Box,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import useStyles from "./CafeDetailsStyles";
import Review from "./Review";

const CafeDetails = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Card className={classes.detailsCard}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <div className={classes.detailsImgCtn}>
                <img
                  className={classes.detailsImg}
                  src="https://source.unsplash.com/random"
                  alt="cafe"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Cafe Name
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                className={classes.cafeInfo}
                mb={2}
              >
                <Box>
                  <Rating value="3.5" precision="0.5" readOnly />
                </Box>
                {/* {avgRatingDisplay ? ( */}
                <Box className="avgRating" ml={1}>
                  3.5
                </Box>
                {/* ) : null} */}
              </Box>
              <Divider />
              <Box mt={2}>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and
                  set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant,
                  about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                  chicken broth; bring to a boil.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
        <Card className={classes.reviewsCard}>
          <div className={classes.blockTitle}>
            <Typography className={classes.titleText} variant="h4">
              Reviews
            </Typography>
            <Button variant="contained" color="primary" size="small">
              Write a review
            </Button>
          </div>
          <Divider />
          <Review />
        </Card>
      </div>
    </>
  );
};

export default CafeDetails;
