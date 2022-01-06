import { Box, FormHelperText } from "@material-ui/core";

const ErrorLabelText = ({ error }) => {
  return (
    <Box mb={1}>
      <FormHelperText style={{ color: "#f44336", fontSize: "0.8rem" }}>
        {error}
      </FormHelperText>
    </Box>
  );
};

export default ErrorLabelText;