import React from "react";
import {
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import useStyles from "./style";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PageHeader from "../PageHeader";

const Leisure = () => {
  const leisure = useSelector((state) => state.leisure);
  const history = useHistory();
  const navigateInUM = () => history.push(`/leisure/inUM`);
  const navigateNearUM = () => history.push(`/leisure/nearUM`);
  const navigateRanking = () => history.push(`/leisure/ranking`);
  const classes = useStyles();
  return (
    <>
      <PageHeader title="Leisure" />
      <Typography className={classes.title} variant="h5">
        Category
      </Typography>
      <div style={{ margin: "0 10vw" }}>
        <ImageList sx={{ width: 400, height: 400 }}>
          <ImageListItem style={{ padding: "20px" }}>
            <img
              src="https://www.easyuni.com/media/institution/photo/2015/11/19/UMMALAYSIA.jpg.600x400_q85.jpg"
              loading="lazy"
            />
            <ImageListItemBar
              title="Things to do in UM"
              subtitle="#inUM"
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  onClick={navigateInUM}
                >
                  <InfoIcon style={{ color: "#e0e0e0" }} />
                </IconButton>
              }
            />
          </ImageListItem>
          <ImageListItem style={{ padding: "20px" }}>
            <img
              src="https://asianinstitute.com.my/sitepad-data/uploads//1-4.jpg"
              loading="lazy"
            />
            <ImageListItemBar
              title="Things to do near UM"
              subtitle="#nearUM"
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  onClick={navigateNearUM}
                >
                  <InfoIcon style={{ color: "#e0e0e0" }} />
                </IconButton>
              }
            />
          </ImageListItem>
        </ImageList>
      </div>
      <Typography className={classes.title} variant="h5">
        Ranking
      </Typography>
      <div style={{ margin: "0 10vw" }}>
        <ImageList>
          <ImageListItem style={{ width: "100%", padding: "20px" }}>
            <img
              src="https://innovationcloud.com/pub/blog/16085586899987_innovation_cloud_-_customer_experience.png"
              loading="lazy"
            />
            <ImageListItemBar
              title="Must Do Things for UM Students"
              subtitle="#experienceSharing"
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  onClick={navigateRanking}
                >
                  <InfoIcon style={{ color: "#e0e0e0" }} />
                </IconButton>
              }
            />
          </ImageListItem>
        </ImageList>
      </div>
    </>
  );
};
export default Leisure;
