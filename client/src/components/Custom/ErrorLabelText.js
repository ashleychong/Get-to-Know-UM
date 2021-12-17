import { Box, FormHelperText } from "@material-ui/core";

const ErrorLabelText = ({ error }) => {
  return (
    <Box mb={1}>
      <FormHelperText style={{ color: "#d32f2f", fontSize: "0.8rem" }}>
        {error}
      </FormHelperText>
    </Box>
  );
};

export default ErrorLabelText;