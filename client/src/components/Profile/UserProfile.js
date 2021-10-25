import React, { useState, useEffect } from "react";
import { Paper, Toolbar, CssBaseline, Grid, Typography, Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { useSelector } from "react-redux";

import PageHeader from './../PageHeader';
import useStyles from "./styles";
import EditProfilePopup from './EditProfilePopup';
import Custom from './../Custom/Custom';
import { Avatar } from '@material-ui/core/';

const UserProfile = () => {
    const classes = useStyles();
    const user = useSelector((state) => state.auth.authData.result);
    const [openUpdateProfilePopup, setOpenUpdateProfilePopup] = useState(false);

    if (!user) {
        return (
            <Typography>
                Loading
            </Typography>
        );
    }

    return (
        <>
            <CssBaseline />
            <PageHeader title="Profile" />
            <Paper className={classes.pageContent}>
                <Grid container justify="center">
                    <Avatar className={classes.avatar} alt={user.name} src={user.image}>
                        {user.name.charAt(0)}
                    </Avatar>
                    {/* {user.image ?
                        (<Avatar className={classes.avatar} src={user.image} />)
                        : (<Avatar>
                            {user.name.charAt(0)}
                        </Avatar>)} */}
                </Grid>
                <Table className={classes.table}>
                    <TableBody>
                        <TableRow>
                            <TableCell>Full Name</TableCell>
                            <TableCell>{ user.name }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Matric Number</TableCell>
                            <TableCell>{ user.matricNumber }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell>{ user.email }</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Custom.Button
                    text="Edit Profile"
                    variant="contained"
                    onClick={() => {
                        setOpenUpdateProfilePopup(true);
                    }}
                />
                <EditProfilePopup
                    openUpdateProfilePopup={openUpdateProfilePopup}
                    setOpenUpdateProfilePopup={setOpenUpdateProfilePopup}
                />
            </Paper>
        </>
    )
};

export default UserProfile;