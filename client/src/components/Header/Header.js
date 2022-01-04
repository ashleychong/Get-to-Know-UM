import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import PropTypes from "prop-types";
import {
  useMediaQuery,
  Drawer,
  IconButton,
  Box,
  Divider,
  Menu,
  ListItem,
  MenuItem,
  Typography,
  Avatar,
  AppBar,
  Toolbar,
  Button,
} from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  Menu as MenuIcon,
  Close,
  KeyboardArrowDown,
  EventAvailableOutlined,
  LocalLibraryOutlined,
  DirectionsRunOutlined,
  PeopleAltOutlined,
  FastfoodOutlined,
  LocalDiningOutlined,
  ForumOutlined,
  AssessmentOutlined,
} from "@material-ui/icons";

import * as actionType from "../../constants/actionTypes";
import useStyles from "./headerStyles";
import logo from "../../assets/images/logo.png";
import Custom from "../Custom/Custom";

const sections = [
  { title: "Forum", url: "/forum" },
  { title: "Club", url: "/club" },
  { title: "Event", url: "/event" },
  { title: "Leisure", url: "/leisure" },
  { title: "Food", url: "/food" },
  { title: "Course", url: "/courses" },
  { title: "GPA Calculator", url: "/gpa" },
];

const sidebarItems = [
  { title: "Forum", url: "/forum", icon: <ForumOutlined /> },
  { title: "Club", url: "/club", icon: <PeopleAltOutlined /> },
  { title: "Event", url: "/event", icon: <EventAvailableOutlined /> },
  { title: "Leisure", url: "/leisure", icon: <DirectionsRunOutlined /> },
  { title: "Cafe", url: "/cafe", icon: <LocalDiningOutlined /> },
  { title: "Food", url: "/food", icon: <FastfoodOutlined /> },
  { title: "Course", url: "/courses", icon: <LocalLibraryOutlined /> },
  { title: "GPA Calculator", url: "/gpa", icon: <AssessmentOutlined /> },
];

export default function Header(props) {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const user = useSelector((state) => state.auth.authData);
  // console.log(user);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const [anchorE1, setAnchorE1] = useState(null);
  const open = Boolean(anchorE1);
  const downXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { title } = props;

  const handleDrawerToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleMenu = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE1(null);
  };

  let showNavLinks = true;
  if (
    downXs ||
    location.pathname === "/auth" ||
    location.pathname.startsWith("/passwordReset")
  ) {
    showNavLinks = false;
  }

  const signInOrLogOut = () => {
    if (user?.result) {
      logout();
    } else {
      history.push("/auth");
    }
    setSidebarOpen(false);
  };

  const logout = () => {
    console.log("Logged out");
    dispatch({ type: actionType.LOGOUT });

    history.push("/");
  };

  useEffect(() => {
    const token = user?.token;

    if (isSidebarOpen) {
      setSidebarOpen(false);
    }
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    // setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <>
      <AppBar
        className={"primary-app-bar"}
        color={"default"}
        position={"relative"}
        elevation={1}
      >
        <Toolbar>
          {downXs && (
            <IconButton
              style={{ padding: "8px" }}
              onClick={() => setSidebarOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <div className={classes.logoContainer}>
            <a href="/home">
              <img src={logo} alt="Get to Know UM" className={classes.logo} />
            </a>
          </div>
          <div className={classes.profile}>
            {user?.result && (
              <Avatar
                component={Link}
                to="/profile"
                className={classes.purple}
                alt={user?.result?.name}
                src={user?.result?.image}
              >
                {user?.result?.name?.charAt(0)}
              </Avatar>
            )}
            {user?.result && !downXs && (
              <>
                <Typography
                  className={classes.userName}
                  variant="h6"
                  component={Link}
                  to="/profile"
                >
                  {user?.result?.name}
                </Typography>
                <Button variant="contained" color="secondary" onClick={logout}>
                  Logout
                </Button>
              </>
            )}
          </div>
          {!user?.result && !downXs && (
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
              {sections.map((section) =>
                section?.title === "Food" ? (
                  <div key={section.title}>
                    <Button
                      key={section.title}
                      className={classes.linkText}
                      onClick={handleMenu}
                    >
                      Food&nbsp;
                      <KeyboardArrowDown />
                    </Button>
                    <Menu
                      className={classes.dropdownMenu}
                      id="menu-appbar"
                      anchorEl={anchorE1}
                      keepMounted
                      open={open}
                      onClose={handleClose}
                      getContentAnchorEl={null}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <MenuItem
                        component={Link}
                        to={`/food`}
                        onClick={handleClose}
                      >
                        Food
                      </MenuItem>
                      <MenuItem
                        component={Link}
                        to={`/cafe`}
                        onClick={handleClose}
                      >
                        Cafe
                      </MenuItem>
                    </Menu>
                  </div>
                ) : (
                  <a
                    href={section.url}
                    key={section.title}
                    className={classes.linkText}
                  >
                    {section.title}
                  </a>
                )
              )}
            </Toolbar>
          </AppBar>
        </>
      )}
      <Drawer
        variant="temporary"
        anchor="left"
        open={isSidebarOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          style: {
            backgroundColor: "#111827",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <div
              style={{
                padding: "24px 16px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Custom.ActionButton
                color="closeSidebar"
                onClick={handleDrawerToggle}
              >
                <Close />
              </Custom.ActionButton>
            </div>
            <div>
              <Box style={{ padding: "0 16px" }}>
                <Box
                  style={{
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "11px 24px",
                    borderRadius: "8px",
                  }}
                >
                  <div>
                    <Typography
                      style={{ fontWeight: 500 }}
                      color="inherit"
                      variant="subtitle1"
                      gutterBottom
                    >
                      Welcome
                    </Typography>
                    {user?.result ? (
                      <Typography style={{ color: "#9CA3AF" }} variant="body2">
                        {user?.result?.name}
                      </Typography>
                    ) : (
                      <Typography style={{ color: "#9CA3AF" }} variant="body2">
                        Guest
                      </Typography>
                    )}
                  </div>
                </Box>
              </Box>
            </div>
            <Divider
              style={{
                backgroundColor: "#2D3748",
                margin: "24px 0",
              }}
            />
            <Box>
              {sidebarItems.map((item) => (
                <NavItem
                  key={item.title}
                  icon={item.icon}
                  href={item.url}
                  title={item.title}
                />
              ))}
            </Box>
            <Divider
              style={{
                backgroundColor: "#2D3748",
                marginTop: "24px",
              }}
            />
            <Box style={{ padding: "24px 16px" }}>
              <Button
                onClick={signInOrLogOut}
                fullWidth
                style={{
                  marginTop: 16,
                  backgroundColor: "#10B981",
                  color: "white",
                  textTransform: "none",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  letterSpacing: "0.01rem",
                }}
                variant="contained"
              >
                {user?.result ? "Log out" : "Sign in"}
              </Button>
            </Box>
          </Box>
        </>
      </Drawer>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

const NavItem = (props) => {
  const { href, icon, title, ...others } = props;
  const location = useLocation();
  const active = href ? location.pathname.startsWith(href) : false;

  return (
    <ListItem
      disableGutters
      style={{
        display: "flex",
        marginBottom: "4px",
        padding: "0 16px",
      }}
      {...others}
    >
      <Button
        component={Link}
        to={href}
        startIcon={icon}
        disableRipple
        style={{
          backgroundColor: active && "rgba(255,255,255, 0.08)",
          borderRadius: "8px",
          color: active ? "#10B981" : "#D1D5DB",
          fontSize: "0.9rem",
          lineHeight: "1.9",
          fontWeight: active && "600",
          letterSpacing: "0.02rem",
          justifyContent: "flex-start",
          padding: "9px 24px",
          textAlign: "left",
          textTransform: "none",
          width: "100%",
          "& .MuiButtonStartIcon": {
            color: active ? "#10B981" : "#9CA3AF",
          },
          "&:hover": {
            backgroundColor: "rgba(255,255,255, 0.08)",
          },
        }}
      >
        <Box style={{ flexGrow: 1 }}>{title}</Box>
      </Button>
    </ListItem>
  );
};
