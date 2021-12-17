import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  border: {
    border: "solid",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    position: "relative",
    margin: "20px",
    height: "280px",
  },
  grid: {
    display: "flex",
  },
  details: {
    fontWeight: "450",
  },
  tags: {},
  titleSection: {},
  title: {
    fontWeight: "500",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
  detailsSection: {
    height: "30px",
  },
});
