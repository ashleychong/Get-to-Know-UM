import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import FileBase from "react-file-base64";

import Custom from './../Custom/Custom';
import { updateProfile } from './../../actions/auth';

const initialValues = {
  firstName: "",
  lastName: "",
  matricNumber: "",
  email: "",
  image:"",
};

const EditProfileForm = ({ setOpenUpdateProfilePopup } ) => {
    const user = useSelector((state) => state.auth.authData.result);
    const dispatch = useDispatch();

    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ("firstName" in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required.";
        if ("lastName" in fieldValues)
          temp.lastName = fieldValues.lastName ? "" : "This field is required.";
        if ("matricNumber" in fieldValues)
            temp.matricNumber = fieldValues.matricNumber ? "" : "This field is required.";
        if ("email" in fieldValues)
            temp.email = fieldValues.email ? "" : "This field is required.";
        
        setErrors({
          ...temp,
        });

        if (fieldValues === values)
          return Object.values(temp).every((x) => x === "");
    }

    const { values, setValues, errors, setErrors, handleInputChange, resetForm } = Custom.useForm(initialValues, true, validate);

    useEffect(() => {
        if (user) {
            const userData = {
                firstName: user.name.split(" ")[0],
                lastName: user.name.split(" ")[1],
                matricNumber: user.matricNumber,
                email: user.email,
            };
            setValues(userData);
        }
    }, [user]);

    const clear = () => {
        setOpenUpdateProfilePopup(false);
        setValues(initialValues);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        dispatch(updateProfile(user._id, { ...values }));
        clear();
    };

    // if (!user?.result?.name) {
    //     return (
    //         <Typography variant="h6" align="center">
    //             Please sign in.
    //         </Typography>
    //     );
    // }

    return (
        <Custom.Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Custom.Input
                    name="firstName"
                    label="First Name"
                    value={values.firstName}
                    onChange={handleInputChange}
                    error={errors.firstName}
                    required
                    />
                </Grid>    
                <Grid item xs={12} sm={6}>
                    <Custom.Input
                    name="lastName"
                    label="Last Name"
                    value={values.lastName}
                    onChange={handleInputChange}
                    error={errors.lastName}
                    required
                    />
                </Grid>
                <Grid item xs={12}>
                <Custom.Input
                    name="matricNumber"
                    label="Matric Number"
                    value={values.matricNumber}
                    onChange={handleInputChange}
                    error={errors.matricNumber}
                    fullWidth
                    required
                />
                </Grid>
                <Grid item xs={12}>
                <Custom.Input
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    fullWidth
                    required
                />
                </Grid>
                <Grid item xs={12} style={{margin: "1rem 0.5rem"}}>
                <div>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setValues({ ...values, image: base64 })}
                    />
                </div>
                </Grid>
                <div>
                    <Custom.Button type="submit" text="Submit" />
                </div>
            </Grid>
        </Custom.Form>
    );
};

export default EditProfileForm;