import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
    margin: "2rem 3rem",
  },
  content: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // "& .MuiGrid-item": {
    // padding: "0 2rem",
    // }
  },
  indicatorText: {
    color: "rgba(80, 72, 229, 1)",
  },
  card: {
    margin: "0 5rem",
    padding: "20px 30px",
  },
  divider: {
    marginTop: "0.5rem",
    marginBottom: "0.8rem",
  },
  detailsImgCtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  detailsImg: {
    maxHeight: "300px",
    maxWidth: "100%",
  },
  btn: {
    marginRight: "10px",
  }
}));
