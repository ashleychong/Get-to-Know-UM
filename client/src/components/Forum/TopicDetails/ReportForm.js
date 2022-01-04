import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import {
  Grid,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Custom from "../../Custom/Custom";
import { submitForumContentReport } from "../../../actions/forumReports";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

const initialValues = {
  reportRemark: "",
};

const ReportForm = ({
  reportedContent,
  setReportedContent,
  setOpenPopup,
  contentType,
}) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const location = useLocation();
  // console.log(location.pathname);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("reportRemark" in fieldValues)
      temp.reportRemark = fieldValues.reportRemark
        ? ""
        : "This field is required.";

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    Custom.useForm(initialValues, true, validate);

  const clear = () => {
    setOpenPopup(false);
    setReportedContent({});
    setValues(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      console.log("Incomplete form");
      console.log(values);
      return;
    } else {
      // console.log(values);
      if (contentType === "post") {
        dispatch(
          submitForumContentReport(reportedContent?._id, {
            ...values,
            authorId: reportedContent?.userId,
            contentType: contentType,
            reportedContent: reportedContent?.message,
            reportedContentUrl: location.pathname,
          })
        );
      }
      else if (contentType === "topic") {
        dispatch(
          submitForumContentReport(reportedContent?._id, {
            ...values,
            authorId: reportedContent?.userId,
            contentType: contentType,
            reportedContent: reportedContent?.title,
            reportedContentUrl: location.pathname,
          })
        );
      }
    }
    clear();
  };

  if (!user?.result?.name) {
    return (
      <Typography variant="h6" align="center">
        Please sign in to report a post.
      </Typography>
    );
  }

  return (
    <Custom.Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <RadioGroup
            name="reportRemark"
            value={values.reportRemark}
            onChange={handleInputChange}
          >
            <FormControlLabel
              value="It's a spam"
              control={<Radio />}
              label="It's a spam"
            />
            <FormControlLabel
              value="It's rude, vulgar or offensive"
              control={<Radio />}
              label="It's rude, vulgar or offensive"
            />
            <FormControlLabel
              value="It threatens violence or physical harm"
              control={<Radio />}
              label="It threatens violence or physical harm"
            />
          </RadioGroup>
        </Grid>
        <div style={{ marginTop: "3vh" }}>
          <Custom.Button type="submit" text="Submit" />
          <Custom.Button text="Reset" color="default" onClick={resetForm} />
        </div>
      </Grid>
    </Custom.Form>
  );
};

export default ReportForm;
