import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
} from "@material-ui/core";

import { updateProfile } from "../../actions/auth";
import Custom from "../Custom/Custom";
import useStyles from "./styles";

const initialValues = {
  firstName: "",
  lastName: "",
  matricNumber: "",
  email: "",
};

const AccountProfileDetails = ({ user }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
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
    if ("email" in fieldValues)
      temp.email = fieldValues.email ? "" : "This field is required.";

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    Custom.useForm(initialValues, true, validate);

  useEffect(() => {
    if (user) {
      const userData = {
        firstName: user?.firstName,
        lastName: user?.lastName,
        matricNumber: user?.matricNumber,
        email: user?.email,
      };
      setValues(userData);
    }
  }, [user]);

  const clear = () => {
    setValues(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(values);
    dispatch(updateProfile(user._id, { ...values }));
    clear();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Card elevation={0}>
        <CardHeader
          subheader="Edit profile information"
          title="Profile"
          className={classes.cardContent}
        />
        <Divider />
        <CardContent className={classes.cardContent}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Custom.Input
                fullWidth
                label="First name"
                name="firstName"
                value={values.firstName}
                onChange={handleInputChange}
                error={errors.firstName}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Custom.Input
                fullWidth
                label="Last name"
                name="lastName"
                value={values.lastName}
                onChange={handleInputChange}
                error={errors.lastName}
                required
                variant="outlined"
              />
            </Grid>
            {user?.role === "student" && (
              <Grid item xs={12}>
                <Custom.Input
                  fullWidth
                  name="matricNumber"
                  label="Matric Number"
                  value={values.matricNumber}
                  onChange={handleInputChange}
                  error={errors.matricNumber}
                  required
                  variant="outlined"
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <Custom.Input
                fullWidth
                name="email"
                label="Email"
                value={values.email}
                onChange={handleInputChange}
                error={errors.email}
                required
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          className={classes.cardContent}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button type="submit" color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
