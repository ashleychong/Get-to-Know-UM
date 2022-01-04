import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  InputAdornment,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import { resetPassword } from "../../actions/auth";
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
  password: "",
  confirmPassword: "",
};

const ResetPasswordForm = ({ userId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const { message, errors: authError } = useSelector((state) => state.auth);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("password" in fieldValues) {
      const passwordValid = fieldValues.password.match(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      );
      temp.password = passwordValid
        ? ""
        : "The password must contain minimum eight characters, with at least one letter and one number.";
    }
    if ("confirmPassword" in fieldValues) {
      temp.confirmPassword =
        fieldValues.confirmPassword === values.password
          ? ""
          : "Passwords do not match.";
    }
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    Custom.useForm(initialValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      console.log("Incomplete reset password form");
      console.log(values);
      return;
    } else {
      // console.log("Reset password form");
      // console.log(values);
      dispatch(resetPassword({ userId, ...values }));
    }
  };

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography variant="h4" className={classes.title}>
            Update your password
          </Typography>
          {authError && (
            <Box mt={2} sx={{ width: "100%" }}>
              <Alert severity="error">{authError}</Alert>
            </Box>
          )}
          {message && (
            <Box my={2} sx={{ width: "100%" }}>
              <Alert severity="success">{message}</Alert>
            </Box>
          )}
          {message ? (
            <>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                component={Link}
                to="/auth"
              >
                Sign back in
              </Button>
            </>
          ) : (
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="password"
                    label="New password"
                    variant="outlined"
                    // required
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleInputChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleShowPassword}>
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.password && (
                    <Custom.ErrorLabelText error={errors.password} />
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="confirmPassword"
                    label="Repeat password"
                    variant="outlined"
                    // required
                    fullWidth
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleInputChange}
                  />

                  {errors.confirmPassword && (
                    <Custom.ErrorLabelText error={errors.confirmPassword} />
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
                Update password
              </Button>
            </form>
          )}
        </div>
      </Container>
    </>
  );
};

export default ResetPasswordForm;
