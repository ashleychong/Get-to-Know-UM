import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  blogEntry: {
    background: "#fff",
    "@media (min-width: 768px)": {
      marginBottom: "30px",
    },
    "@media (min-width: 767.98px)": {
      marginBottom: "30px",
    },
    "& $text": {
      position: "relative",
      borderTop: "0",
      borderRadius: "2px",
    },
    "& $text $heading": {
      fontSize: "20px",
      marginBottom: "16px",
      fontWeight: 600,
    },
    "& $text $heading a": {
      color: "#000000",
    },
    "& $text $metaChat": {
      color: "rgba(0, 0, 0, 0.3)",
    },
    "& $text $read": {
      color: "#000000",
      fontSize: "14px",
    },
    "& $meta > div": {
      display: "inline-block",
      marginRight: "5px",
      marginBottom: "5px",
      fontSize: "14px",
    },
    "& $meta > div a": {
      color: "rgba(0, 0, 0, 0.3)",
      fontSize: "15px",
    },
    "& $meta > div a:hover": {
      color: "#cccccc",
    },
  },
}));