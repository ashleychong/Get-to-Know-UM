import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  InputAdornment,
  IconButton,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  Box,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

import { verifyResetPasswordToken } from "../../actions/auth";
import ResetPasswordForm from "./ResetPasswordForm";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const VerifyResetPasswordLink = () => {
  const query = useQuery();
  const dispatch = useDispatch();
  const history = useHistory();
  const userIdQuery = query.get("id");
  const tokenQuery = query.get("token");
  const { isLoading } = useSelector((state) => state.auth);


  useEffect(() => {
    if (userIdQuery && tokenQuery) {
      // console.log("Verify password reset token url query");
      // console.log(userIdQuery);
      // console.log(tokenQuery);
      dispatch(
        verifyResetPasswordToken(
          { userId: userIdQuery, token: tokenQuery },
          history
        )
      );
    }
  }, [dispatch]);

  return isLoading ? (
    <>
      <CssBaseline />
      <div
        style={{
          margin: "auto",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <HashLoader color="#36D7B7" loading={true} css={override} size={150} />
      </div>
    </>
  ) : (
    <ResetPasswordForm userId={userIdQuery} />
  );
};

export default VerifyResetPasswordLink;