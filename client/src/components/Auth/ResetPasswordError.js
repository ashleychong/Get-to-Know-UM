import { Box, Button, Container, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

import errorImg from "../../assets/images/error401_light.svg";
import Custom from "../Custom/Custom";

const ResetPasswordError = () => (
  <>
    <Box
      component="main"
      style={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
        padding: "10vh 0",
      }}
    >
      <Container maxWidth="md">
        <Box
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            align="center"
            color="textPrimary"
            variant="h2"
            style={{ fontSize: "3.5rem", fontWeight: "700" }}
          >
            401: Authorization required
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle2"
            style={{ fontSize: "1.2rem" }}
          >
            Your reset password link has expired or is invalid.
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <img
              alt="Under development"
              src={errorImg}
              style={{
                marginTop: 50,
                marginBottom: 50,
                display: "inline-block",
                maxWidth: "100%",
                width: 560,
              }}
            />
          </Box>
          <Custom.Button
            component={Link}
            to="/home"
            color="primary"
            startIcon={<ArrowBackIcon fontSize="small" />}
            sx={{ mt: 3 }}
            variant="contained"
            text="Go back to sign in"
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default ResetPasswordError;
