import React from "react";
import { Typography, Paper } from '@material-ui/core';
import { useDispatch} from "react-redux";

import Custom from './../../Custom/Custom';
import { createPost } from "../../../actions/posts";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    form: {
        maxWidth: "100%",
    },
    replyBox: {
        marginTop: theme.spacing(2.5),
        marginBottom: theme.spacing(2.5),
    },
}));

const initialValues = {
    message: "",
};


const ReplyBox = ({ topicId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));

    const validate = (fValues = values) => {
        let temp = { ...errors };
        if ("message" in fValues) {
            temp.message = fValues.message ? "" : "This field is required.";
        }
        
        setErrors({...temp,});

        if (fValues === values)
            return Object.values(temp).every((x) => x === "");
    };

    const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
        Custom.useForm(initialValues, true, validate);
    
    const clear = () => {
        setValues(initialValues);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createPost(topicId, {
            ...values,
            username: user?.result?.name,
            topicId
        }));
        clear();
    };

    if (!user?.result?.name) {
        return (
            <Typography variant="h6" align="center">
                Please sign in to leave a comment.
            </Typography>
        );
    }

    return (
        <div>
            <Typography variant="h6">
                Leave a comment
            </Typography>
            <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
                <div className={classes.replyBox}>
                    <Custom.Input
                    name="message"
                    label="Enter your message"
                    multiline
                    rows={4}
                    rowsMax={20}
                    value={values.message}
                    onChange={handleInputChange}
                    error={errors.message}
                    fullWidth
                    required
                    />
                </div>
                <Custom.Button type="submit" text="Post"/>
            </form>
        </div>
    )
};

export default ReplyBox;