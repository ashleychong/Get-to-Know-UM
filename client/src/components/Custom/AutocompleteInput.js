import React from "react";
import { TextField, Chip, useTheme, useMediaQuery } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const AutocompleteInput = (props) => {
  const { value, onChange, options, label, limitTags } = props;
  const theme = useTheme();
  const largeDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const tablet = useMediaQuery(theme.breakpoints.up("sm"));
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const defaultLimitTags = largeDesktop ? 4 : desktop ? 3 : tablet ? 2 : mobile ? 1 : 1;
  
  return (
    <Autocomplete
      multiple
      limitTags={limitTags || defaultLimitTags}
      value={value}
      options={options}
      getOptionLabel={(option) => option}
      onChange={onChange}
      freeSolo
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip label={option} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label}
          fullWidth
          // placeholder="Favorites"
        />
      )}
    />
  );
 };

export default AutocompleteInput;