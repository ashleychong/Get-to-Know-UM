import React from "react";
import {
  CssBaseline,
  Grid,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import Layout from "../Admin/Layout/Layout";
import PageHeader from "./../PageHeader";
import ProfileAvatarCard from "./ProfileAvatarCard";
import ProfileDetailsCard from "./ProfileDetailsCard";
import ChangePasswordCard from "./ChangePasswordCard";

const UserProfile = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.authData.result);

  if (!user) {
    return <Typography>Not logged in</Typography>;
  }

  return user?.role === "admin" ? (
    <>
      <CssBaseline />
      <Layout pageHeaderTitle="Profile">
        <Grid container>
          <Grid item xs={12} sm={9} className={classes.pageContainer}>
            <ProfileAvatarCard user={user} />
          </Grid>
          <Grid item xs={12} sm={9} className={classes.pageContainer}>
            <ProfileDetailsCard user={user} />
          </Grid>
          <Grid item xs={12} sm={9} className={classes.pageContainer}>
            <ChangePasswordCard user={user} />
          </Grid>
        </Grid>
      </Layout>
    </>
  ) : (
    <>
      <CssBaseline />
      <PageHeader title="Profile" />
      <Grid container>
        <Grid item xs={12} sm={9} className={classes.pageContainer}>
          <ProfileAvatarCard user={user} />
        </Grid>
        <Grid item xs={12} sm={9} className={classes.pageContainer}>
          <ProfileDetailsCard user={user} />
        </Grid>
        <Grid item xs={12} sm={9} className={classes.pageContainer}>
          <ChangePasswordCard user={user} />
        </Grid>
      </Grid>
    </>
  );
};

export default UserProfile;
