import { Box, Button, Container, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

import errorImg from "../../assets/images/undraw_page_not_found_su7k.svg";
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
            404: The page you are looking for isn’t here
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle2"
            style={{ fontSize: "1.1rem" }}
          >
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation.
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
            text="Go back to the home page"
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default ResetPasswordError;
