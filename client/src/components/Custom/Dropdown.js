import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Box,
} from "@material-ui/core";
const DropDown = (props) => {
  const { name, label, value, error = null, onChange, options } = props;

  return (
    <>
      <FormControl variant="outlined" {...(error && { error: true })}>
        <InputLabel>{label}</InputLabel>
        <Select label={label} name={name} value={value} onChange={onChange}>
          {options.map((item) => (
            <MenuItem key={item.id} value={item.title}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box ml={1} mb={2}>
        {error && (
          <FormHelperText style={{ color: "#d32f2f", fontSize: "0.8rem" }}>
            {error}
          </FormHelperText>
        )}
      </Box>
    </>
  );
};

export default DropDown;
