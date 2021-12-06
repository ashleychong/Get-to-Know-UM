import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import { Link as muiLink } from "@material-ui/core/Link";
import { Link, useHistory, useLocation } from "react-router-dom";

import * as actionType from "../../constants/actionTypes";
import useStyles from "./styles";
import logo from "../../assets/images/logo.png";

const sections = [
  { title: "Forum", url: "/forum" },
  { title: "Club", url: "/club" },
  { title: "Event", url: "/event" },
  { title: "Leisure", url: "/leisure" },
  { title: "Food", url: "/food" },
  { title: "Course", url: "/courses" },
  { title: "GPA Calculator", url: "/gpa" },
];

export default function Header(props) {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const user = useSelector((state) => state.auth.authData);
  // console.log(user);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const { title } = props;

  let showNavLinks = true;
  if (location.pathname === "/auth") {
    showNavLinks = false;
  }

  const logout = () => {
    console.log("Logged out");
    dispatch({ type: actionType.LOGOUT });

    history.push("/");

    // setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    // setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <React.Fragment>
      <AppBar
        className={"primary-app-bar"}
        color={"default"}
        position={"relative"}
        elevation={2}
      >
        <Toolbar>
          {/* <Typography
            variant="h5"
            color="inherit"
            align="left"
            noWrap
            className={classes.toolbarTitle}
            component={Link}
            to="/"
          >
            {title}
          </Typography> */}
          <div className={classes.logoContainer}>
            <a href="/home">
              <img src={logo} alt="Get to Know UM" className={classes.logo} />
            </a>
          </div>
          {/* <IconButton>
            <SearchIcon />
          </IconButton> */}

          {user?.result ? (
            <div className={classes.profile}>
              <Avatar
                component={Link}
                to="/userProfile"
                className={classes.purple}
                alt={user?.result?.name}
                src={user?.result?.image}
              >
                {user?.result?.name?.charAt(0)}
              </Avatar>
              <Typography
                className={classes.userName}
                variant="h6"
                component={Link}
                to="/userProfile"
              >
                {user?.result?.name}
              </Typography>
              <Button variant="contained" color="secondary" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => {
                history.push("/auth");
                console.log("sign in!");
              }}
              color="primary"
              variant="contained"
            >
              Sign In
            </Button>
          )}

          {/* <Button component={Link} to="/auth" variant="outlined" size="small">
            Sign in
          </Button> */}
        </Toolbar>
      </AppBar>
      {showNavLinks && (
        <>
          <AppBar
            className={"secondary-app-bar"}
            color={"primary"}
            position={"relative"}
            elevation={0}
          >
            <Toolbar
              component="nav"
              variant="dense"
              className={classes.toolbarSecondary}
            >
              {sections.map((section) => (
                <a
                  href={section.url}
                  key={section.title}
                  className={classes.linkText}
                >
                  {section.title}
                </a>
              ))}
            </Toolbar>
          </AppBar>
        </>
      )}
    </React.Fragment>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};
