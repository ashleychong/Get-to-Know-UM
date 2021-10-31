import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    margin: "4vh 7vh",
  },
  detailsCard: {
    padding: "1.5rem",
    marginBottom: "1.5rem",
  },
  detailsImgCtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  detailsImg: {
    maxHeight: "400px",
    maxWidth: "100%",
  },
  cafeInfo: {
    alignItems: "center",
    lineHeight: "1",
    "& .avgRating": {
      fontWeight: "bold",
      fontSize: "0.95rem",
    },
  },
  reviewsCard: {
    padding: "1.5rem",
  },
  blockTitle: {
    display: "flex",
    marginBottom: "1rem",
  },
  titleText: {
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
}));
