import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { styled } from "@material-ui/core/styles";

import { updateProfileImage } from "../../actions/auth";
import useStyles from "./styles";

const ProfileAvatarCard = ({ user }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // console.log("converted to base64");
    // console.log(base64);
    dispatch(updateProfileImage(user?._id, {image: base64}));
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <Card elevation={0}>
      <CardContent style={{ padding: "32px 24px" }}>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* <Avatar
            src={user.image}
            sx={{
              height: 64,
              mb: 2,
              width: 64,
            }}
          /> */}
          <Avatar className={classes.avatar} alt={user.name} src={user.image}>
            {user.name.charAt(0)}
          </Avatar>
          <Typography color="textPrimary" gutterBottom variant="h5" style={{ fontWeight: 600 }}>
            {user.name}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions style={{ display: "flex" }}>
        <label htmlFor="contained-button-file" style={{ flex: 1 }}>
          <Input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
          />
          <Button
            component="span"
            color="primary"
            fullWidth
            variant="text"
            disableElevation
            className={classes.uploadButton}
          >
            Upload picture
          </Button>
        </label>
      </CardActions>
    </Card>
  );
};

export default ProfileAvatarCard;
