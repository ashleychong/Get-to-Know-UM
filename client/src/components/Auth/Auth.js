import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  InputAdornment,
  IconButton,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Container,
  Box,
  FormHelperText,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { signIn, signUp } from "../../actions/auth";
import Custom from "../Custom/Custom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "6vh",
    marginBottom: "10vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  },
}));

const initialState = {
  firstName: "",
  lastName: "",
  matricNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const { errors: authError  } = useSelector((state) => state.auth);
  // const [errorMessage, setErrorMessage] = useState("");

   const validate = (fieldValues = values) => {
     let temp = { ...errors };
     if ("firstName" in fieldValues)
       temp.firstName = fieldValues.firstName ? "" : "This field is required.";
     if ("lastName" in fieldValues)
       temp.lastName = fieldValues.lastName ? "" : "This field is required.";
     if ("matricNumber" in fieldValues)
       temp.matricNumber = fieldValues.matricNumber
         ? ""
         : "This field is required.";
     if ("email" in fieldValues) {
      const emailValid = fieldValues.email.match(
        /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
      );
      temp.email = emailValid ? "" : "Invalid email format.";
     }
     if ("password" in fieldValues) {
       const passwordValid = fieldValues.password.match(
         /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
       );
       temp.password = passwordValid
         ? ""
         : "The password must contain minimum eight characters, with at least one letter and one number.";
     }
     if ("confirmPassword" in fieldValues) {
       temp.confirmPassword = fieldValues.confirmPassword === values.password ? "" : "Passwords do not match.";
     }
     setErrors({
       ...temp,
     });

     if (fieldValues === values)
       return Object.values(temp).every((x) => x === "");
   };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    Custom.useForm(initialState, true, validate);

  // useEffect(() => {
  //   setErrorMessage(errors);
  // }, [errors]);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("submitted");
    // console.log(form);

    if (isSignup) {
      if (!validate()) {
        console.log("Incomplete sign up form");
        console.log(values);
        return;
      }
      dispatch(signUp(values, history));
    } else {
      dispatch(signIn(values, history));
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignup ? "Sign Up" : "Sign In"}
          </Typography>
          {authError && (
            <Box my={2} sx={{ width: "100%" }}>
              <Alert severity="error">{authError}</Alert>
            </Box>
          )}
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="firstName"
                      label="First Name"
                      variant="outlined"
                      // required
                      fullWidth
                      value={values.firstName}
                      onChange={handleInputChange}
                      autoFocus
                    />
                    {errors.firstName && (
                      <Custom.ErrorLabelText error={errors.firstName} />
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="lastName"
                      label="Last Name"
                      variant="outlined"
                      // required
                      fullWidth
                      value={values.lastName}
                      onChange={handleInputChange}
                    />
                    {errors.lastName && (
                      <Custom.ErrorLabelText error={errors.lastName} />
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="matricNumber"
                      label="Matric Number"
                      variant="outlined"
                      // required
                      fullWidth
                      value={values.matricNumber}
                      onChange={handleInputChange}
                    />
                    {errors.matricNumber && (
                      <Custom.ErrorLabelText error={errors.matricNumber} />
                    )}
                  </Grid>
                </>
              )}
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email Address"
                  variant="outlined"
                  // required
                  fullWidth
                  autoComplete={isSignup ? undefined : "email"}
                  value={values.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <Custom.ErrorLabelText
                    error={errors.email}
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
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
                  autoComplete={isSignup ? undefined : "current-password"}
                />
                {isSignup && errors.password && (
                  <Custom.ErrorLabelText
                    error={errors.password}
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                {isSignup && (
                  <TextField
                    name="confirmPassword"
                    label="Repeat Password"
                    variant="outlined"
                    // required
                    fullWidth
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleInputChange}
                  />
                )}
                {isSignup && errors.confirmPassword && (
                  <Custom.ErrorLabelText
                    error={errors.confirmPassword}
                  />
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
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup
                    ? "Already have an account? Sign in"
                    : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}
