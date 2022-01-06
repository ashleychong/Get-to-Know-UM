import React from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  FormHelperText,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  menuPaper: {
    maxHeight: 300,
  },
}));

const DropDown = (props) => {
  const classes = useStyles();
  const { name, label, value, error = null, onChange, options, isFaculty } = props;

  let renderedOptions = [];
  if (isFaculty) {
    renderedOptions = faculties;
  }
  else {
    renderedOptions = options;
  }

  return (
    <>
      <FormControl variant="outlined" fullWidth {...(error && { error: true })}>
        <InputLabel>{label}</InputLabel>
        <Select
          label={label}
          name={name}
          value={value}
          onChange={onChange}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            getContentAnchorEl: null,
            classes: { paper: classes.menuPaper },
          }}
        >
          {renderedOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}          
        </Select>
      </FormControl>
      {error && (
        <Box ml={1} mb={2}>
          <FormHelperText style={{ color: "#f44336", fontSize: "0.8rem", margin: "0 14px" }}>
            {error}
          </FormHelperText>
        </Box>
      )}
    </>
  );
};

export default DropDown;

const faculties = [
  "Academy of Islamic Studies",
  "Academy of Malay Studies",
  "Centre for Initiation of Talent and Industrial Training (CITra)",
  "Faculty of Arts and Social Sciences",
  "Faculty of Built Environment",
  "Faculty of Business and Economics",
  "Faculty of Computer Science and Information Technology",
  "Faculty of Creative Arts",
  "Faculty of Dentistry",
  "Faculty of Education",
  "Faculty of Engineering",
  "Faculty of Language and Linguistics",
  "Faculty of Law",
  "Faculty of Medicine",
  "Faculty of Pharmacy",
  "Faculty of Science",
  "Sports and Exercise Sciences Centre",
];