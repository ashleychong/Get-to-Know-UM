import { Box, Container, Typography } from "@material-ui/core";
import image404 from "../assets/images/undraw_page_not_found_su7k.svg";
const NotFound = () => (
  <>
    <Box
      sx={{
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md" style={{ marginTop: "20px" }}>
        <Typography align="center" color="textPrimary" variant="h2">
          404: The page you are looking for isn’t here
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="subtitle2"
          style={{ whiteSpace: "pre" }}
        >
          You either tried some shady route or you came here by mistake. <br />
          Whichever it is, try using the navigation
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <img
            alt="Under development"
            src={image404}
            style={{
              marginTop: 50,
              display: "inline-block",
              maxWidth: "100%",
              width: 560,
            }}
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default NotFound;
