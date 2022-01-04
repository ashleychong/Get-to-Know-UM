import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Custom from "../../Custom/Custom";
import { updatePost } from "../../../actions/posts";

const initialValues = {
  message: "",
};

const EditPostForm = ({
  topicId,
  currentPostId,
  setCurrentPostId,
  setOpenPopup,
}) => {
  const post = useSelector((state) =>
    currentPostId
      ? state.topics.posts[topicId].find((post) => post._id === currentPostId)
      : null
  );
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("message" in fieldValues)
      temp.message = fieldValues.message ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    Custom.useForm(initialValues, true, validate);

  useEffect(() => {
    if (post) {
      setValues(post);
    }
  }, [post]);

  const clear = () => {
    setOpenPopup(false);
    setCurrentPostId(0);
    setValues(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentPostId !== 0) {
      dispatch(updatePost(topicId, currentPostId, { ...values }));
    }
    clear();
  };

  if (!user?.result?.name) {
    return (
      <Typography variant="h6" align="center">
        Please sign in.
      </Typography>
    );
  }

  return (
    <Custom.Form onSubmit={handleSubmit}>
      <Grid container>
        <Custom.Input
          label="Message"
          name="message"
          value={values.message}
          onChange={handleInputChange}
          error={errors.message}
          fullWidth
          multiline
          rows={4}
          rowsMax={20}
          required
        />
        <div>
          <Custom.Button type="submit" text="Submit" />
          <Custom.Button text="Reset" color="default" onClick={resetForm} />
        </div>
      </Grid>
    </Custom.Form>
  );
};

export default EditPostForm;
