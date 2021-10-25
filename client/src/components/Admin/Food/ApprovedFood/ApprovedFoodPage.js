import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CssBaseline, Grid, Typography, Button } from "@material-ui/core";

import { getAllFood } from "../../../../actions/food";
import useStyles from "./ApprovedFoodPageStyles";
import ApprovedFoodCards from "./ApprovedFoodCards";
import EditFoodPopup from "./EditFoodPopup";

const ApprovedFoodPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [openPopup, setOpenPopup] = useState(false);
    const [currentFoodId, setCurrentFoodId] = useState(0);

    useEffect(() => {
        dispatch(getAllFood());
    }, [dispatch]);

      const editInPopup = (food) => {
        setCurrentFoodId(food._id);
        setOpenPopup(true);
  };

    return (
        <>
            <CssBaseline />
            <ApprovedFoodCards editInPopup={editInPopup} />
            <EditFoodPopup
                currentFoodId={currentFoodId}
                setCurrentFoodId={setCurrentFoodId}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            />
        </>
    );
};

export default ApprovedFoodPage;
