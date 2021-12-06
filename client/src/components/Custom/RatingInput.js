import React from "react";
import { Rating } from "@material-ui/lab";
import { Box, Typography, FormHelperText } from "@material-ui/core";

const RatingInput = ({
  name,
  questionText,
  value,
  onChange,
  error,
}) => {
  return (
    <>
      <Typography gutterBottom>{questionText}</Typography>
      <Rating
        name={name}
        value={value}
        onChange={onChange}
      />
      <Box mb={1}>
        {error && (
          <FormHelperText style={{ color: "#d32f2f", fontSize: "0.8rem" }}>
            {error}
          </FormHelperText>
        )}
      </Box>
    </>
  );
};

export default RatingInput;
