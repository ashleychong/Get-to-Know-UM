import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export const useForm = (initialValues, validateOnChange = false, validate = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    // console.log(`${name}: ${value}`);
    if (validateOnChange) {
      validate({ [name]: value });
      // console.log(errors);
    }
  };

  const handleRatingInputChange = (event, value) => {
    const { name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const handleAutocompleteInputChange = (event, value) => {
    // MaterialUi Autocomplete will add the name to the outer div 
    // so event.target.name is undefined
    // directly specify the name "tags" to access the values
    setValues({
      ...values,
      searchTags: value,
    });
  };

  const handleAutocompleteInputEditChange = (event, value) => {
    setValues({
      ...values,
      tags: value,
    });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    handleRatingInputChange,
    handleAutocompleteInputChange,
    handleAutocompleteInputEditChange,
    resetForm,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export const Form = (props) => {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
};
