import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, CardMedia, CardContent, CardActions, Button, Typography, Link } from "@material-ui/core";


const CafeCard = ({ imgSrc, imgAlt, title, desc, pagePath }) => {
  return (
    <Card style={{ maxWidth: 480 }}>
      <CardMedia style={{ height: 270 }} image={imgSrc} title={imgAlt} />
      <CardContent>
        <Typography component="h3" variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Link href={pagePath} underline="none">
          Read more
        </Link> */}
        <Button component={Link} to={pagePath} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CafeCard;
