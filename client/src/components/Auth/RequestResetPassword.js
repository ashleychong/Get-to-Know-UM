import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  Box,
  IconButton,
  Collapse,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Close } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import { requestResetPassword } from "../../actions/auth";
import Custom from "../Custom/Custom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "6vh",
    marginBottom: "10vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontWeight: 600,
    margin: "3vh 0",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: "none",
  },
  optionButton: {
    textTransform: "none",
  },
}));

const initialValues = {
  email: "",
};

const RequestResetPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [openAlert, setOpenAlert] = useState(true);
  const { message, errors: authError } = useSelector((state) => state.auth);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("email" in fieldValues) {
      const emailValid = fieldValues.email.match(
        /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
      );
      temp.email = emailValid ? "" : "Invalid email format.";
    }
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    Custom.useForm(initialValues, true, validate);

  // useEffect(() => {
  //   setErrorMessage(errors);
  // }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("submitted");
    // console.log(form);

    if (!validate()) {
      // console.log("Incomplete reset password request form");
      // console.log(values);
      return;
    }
    else {
      // console.log(values);
      dispatch(requestResetPassword(values));
    }
  }

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography variant="h4" className={classes.title}>
            Reset your password
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle2"
            style={{ fontSize: "1rem" }}
          >
            Tell us your email so that we can send you a reset link.
          </Typography>
          {authError && (
            <Box mt={2} sx={{ width: "100%" }}>
              <Alert severity="error">{authError}</Alert>
            </Box>
          )}
          {message && (
            <Box mt={5} mb={3} sx={{ width: "100%" }}>
              <Alert severity="success">{message}</Alert>
            </Box>
          )}
          {message ? (
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              component={Link}
              to="/"
            >
              Return to home page
            </Button>
          ) : (
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} style={{ margin: "2vh 0" }}>
                  <TextField
                    name="email"
                    label="Email address"
                    variant="outlined"
                    required
                    fullWidth
                    autoComplete="email"
                    value={values.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <Custom.ErrorLabelText error={errors.email} />
                  )}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Send password reset email
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Button
                    component={Link}
                    to="/auth"
                    className={classes.optionButton}
                  >
                    I remember my password
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </div>
      </Container>
    </>
  );
};

export default RequestResetPassword;