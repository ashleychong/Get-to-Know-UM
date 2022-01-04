import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  InputAdornment,
  IconButton,
  Collapse,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import {
  Close,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";

import Custom from "../Custom/Custom";
import useStyles from "./styles";
import { updatePassword } from "../../actions/auth";

const initialValues = {
  oldPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

const ChangePasswordCard = ({ user }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const handleShowOldPassword = () => setShowOldPassword(!showOldPassword);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const handleShowNewPassword = () => setShowNewPassword(!showNewPassword);
  const [openAlert, setOpenAlert] = useState(true);
  const { message, errors: authError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (message) {
      setOpenAlert(true);
    }
  }, [message]);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("oldPassword" in fieldValues) {
      temp.oldPassword = fieldValues.oldPassword
        ? ""
        : "This field is required.";
    }
    if ("newPassword" in fieldValues) {
      const passwordValid = fieldValues.newPassword.match(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      );
      temp.newPassword = passwordValid
        ? ""
        : "The password must contain minimum eight characters, with at least one letter and one number.";
    }
    if ("confirmNewPassword" in fieldValues) {
      temp.confirmNewPassword =
        fieldValues.confirmNewPassword === values.newPassword
          ? ""
          : "Passwords do not match.";
    }
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange } =
    Custom.useForm(initialValues, true, validate);

  const clear = () => {
    setValues(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      console.log("Incomplete change password form");
      console.log(values);
      return;
    } else {
      console.log(values);
      dispatch(updatePassword(user._id, { ...values }));
    }
    clear();
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Card elevation={0}>
          <CardHeader
            subheader="Update password"
            title="Password"
            className={classes.cardContent}
          />
          <Divider />
          <CardContent className={classes.cardContent}>
            {authError && (
              <Box my={2} sx={{ width: "100%" }}>
                <Alert severity="error">{authError}</Alert>
              </Box>
            )}
            {message && (
              <Box sx={{ width: "100%" }}>
                <Collapse in={openAlert}>
                  <Box mt={1} mb={2}>
                    <Alert
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setOpenAlert(false);
                          }}
                        >
                          <Close fontSize="inherit" />
                        </IconButton>
                      }
                      sx={{ mb: 2 }}
                    >
                      {message}
                    </Alert>
                  </Box>
                </Collapse>
              </Box>
            )}
            <Custom.Input
              fullWidth
              label="Current password"
              margin="normal"
              name="oldPassword"
              value={values.oldPassword}
              onChange={handleInputChange}
              error={errors.oldPassword}
              type={showOldPassword ? "text" : "password"}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowOldPassword}>
                      {showOldPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Custom.Input
              fullWidth
              label="New password"
              margin="normal"
              name="newPassword"
              onChange={handleInputChange}
              value={values.newPassword}
              error={errors.newPassword}
              type={showNewPassword ? "text" : "password"}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowNewPassword}>
                      {showNewPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Custom.Input
              fullWidth
              label="Repeat new password"
              margin="normal"
              name="confirmNewPassword"
              onChange={handleInputChange}
              value={values.confirmNewPassword}
              error={errors.confirmNewPassword}
              type="password"
              variant="outlined"
            />
          </CardContent>
          <Divider />
          <Box
            className={classes.cardContent}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
            }}
          >
            <Button type="submit" color="primary" variant="contained">
              Update
            </Button>
          </Box>
        </Card>
      </form>
    </>
  );
};

export default ChangePasswordCard;