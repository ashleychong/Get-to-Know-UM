import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Divider,
  Box,
  ButtonBase,
  Button,
  Card,
  Grid,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import useStyles from "./style";
import { getClub, getClubsBySearch } from "../../../actions/clubs";
import LocalPhoneRounded from "@material-ui/icons/LocalPhoneRounded";
import LanguageRounded from "@material-ui/icons/LanguageRounded";
import MailOutlineRounded from "@material-ui/icons/MailOutlineRounded";
import Reviews from "./Reviews";
import ReviewPopup from "./ReviewPopup";
import { getClubReviews } from "../../../actions/clubReviews";
import ClubEvent from "./ClubEvent";
import { Rating } from "@material-ui/lab";

const ClubDetails = () => {
  const { club, clubs } = useSelector((state) => state.clubs);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { clubId } = useParams();
  const [value, setValue] = React.useState("1");
  const user = JSON.parse(localStorage.getItem("profile"));
  const [openPopup, setOpenPopup] = useState(false);
  const [currentReviewId, setCurrentReviewId] = useState(0);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getClub(clubId));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getClubReviews(clubId));
  }, [club]);

  if (!club) return null;

  const editInPopup = (review) => {
    setCurrentReviewId(review._id);
    setOpenPopup(true);
  };

  const events = club.event.split(",");

  const handleJoinClub = () => {
    if (user?.result?.name) {
      window.open(club?.clublink);
    } else {
      setOpen(true);
    }
  };

  return (
    <Paper style={{ padding: "20px" }}>
      <div className={classes.card}>
        <div className={classes.section}>
          <div className={classes.imageSection}>
            <img
              style={{ objectFit: "cover" }}
              className={classes.media}
              src={club.img}
              alt={club.title}
            />
          </div>
          <Typography className={classes.title} variant="h4">
            {club.title}
          </Typography>
          <Divider style={{ marginTop: "20px" }} />
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box
                sx={{ borderBottom: 1, borderColor: "divider" }}
                style={{ textAlign: "center" }}
              >
                <TabList
                  onChange={handleChange}
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#333996",
                    },
                  }}
                >
                  <Tab label="About" value="1" />
                  <Tab label="Event" value="2" />
                  <Tab label="Contact" value="3" />
                  <Tab label="Review" value="4" />
                  <Tab label="Registration" value="5" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Typography className={classes.details}>
                  {club.about}
                </Typography>
              </TabPanel>
              <TabPanel value="2">
                <Grid container spacing={5}>
                  <Grid item xs={6} style={{ margin: "auto" }}>
                    {events.map((event, index) => (
                      <Card
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <CardContent>
                          <Typography
                            color="textSecondary"
                            style={{ fontSize: "17px" }}
                          >
                            {index + 1}
                          </Typography>
                        </CardContent>
                        <div className={classes.desc}>
                          <Typography variant="body1">{event}</Typography>
                        </div>
                      </Card>
                    ))}
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="3">
                <Typography className={classes.details}>
                  For any enquiries, please follow and contact us :
                </Typography>
                {club.website && (
                  <div className={classes.contact}>
                    <ButtonBase onClick={() => window.open(club?.website)}>
                      <LanguageRounded /> &nbsp;&nbsp;&nbsp;{" "}
                      <Typography> Website </Typography>
                    </ButtonBase>
                  </div>
                )}
                {club.insta && (
                  <div className={classes.contact}>
                    <ButtonBase onClick={() => window.open(club?.insta)}>
                      <LanguageRounded /> &nbsp;&nbsp;&nbsp;{" "}
                      <Typography> Instagram</Typography>
                    </ButtonBase>
                  </div>
                )}
                {club.fb && (
                  <div className={classes.contact}>
                    <ButtonBase onClick={() => window.open(club?.fb)}>
                      <LanguageRounded /> &nbsp;&nbsp;&nbsp;{" "}
                      <Typography> Facebook</Typography>
                    </ButtonBase>
                  </div>
                )}
                {club.utube && (
                  <div className={classes.contact}>
                    <ButtonBase onClick={() => window.open(club?.utube)}>
                      <LanguageRounded /> &nbsp;&nbsp;&nbsp;{" "}
                      <Typography> Youtube</Typography>
                    </ButtonBase>
                  </div>
                )}
                {club.linkedin && (
                  <div className={classes.contact}>
                    <ButtonBase onClick={() => window.open(club?.linkedin)}>
                      <LanguageRounded /> &nbsp;&nbsp;&nbsp;{" "}
                      <Typography> LinkedIn</Typography>
                    </ButtonBase>
                  </div>
                )}
                {club.email && (
                  <div className={classes.email}>
                    <MailOutlineRounded />
                    <Typography>&nbsp;&nbsp;{club.email} </Typography>
                  </div>
                )}
                {club.contact && (
                  <div className={classes.email}>
                    <LocalPhoneRounded />
                    <Typography>&nbsp;&nbsp;{club.contact} </Typography>
                  </div>
                )}
              </TabPanel>
              <TabPanel value="4">
                <Card className={classes.reviewsCard}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="h5" style={{ padding: "20px" }}>
                      Rating :{" "}
                    </Typography>
                    <div className={classes.reviewBtn}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => {
                          setOpenPopup(true);
                        }}
                      >
                        Write a review
                      </Button>
                    </div>
                  </div>
                  <div className={classes.clubInfo} mb={2}>
                    <Box className={classes.avgRating} ml={1}>
                      {club?.avgRating?.toFixed(1)}
                    </Box>
                    <Box>
                      <Rating
                        value={club?.avgRating || 0}
                        precision={0.1}
                        readOnly
                        size="large"
                      />
                    </Box>
                  </div>

                  <Reviews editInPopup={editInPopup} clubId={clubId} />
                  <ReviewPopup
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                    clubId={clubId}
                    currentReviewId={currentReviewId}
                    setCurrentReviewId={setCurrentReviewId}
                  />
                </Card>
              </TabPanel>
              <TabPanel value="5">
                {club.clublink && (
                  <div>
                    <Typography className={classes.details}>
                      If you are interested, please join us :
                    </Typography>
                    <div className={classes.button}>
                      <Button
                        className={classes.submitButton}
                        variant="contained"
                        color="primary"
                        size="medium"
                        onClick={handleJoinClub}
                      >
                        Join Club
                      </Button>
                      <Dialog
                        open={open}
                        maxWidth="md"
                        classes={{ paper: classes.dialogWrapper }}
                      >
                        <DialogTitle className={classes.dialogTitle}>
                          <div style={{ display: "flex" }}>
                            <Typography
                              variant="h6"
                              component="div"
                              style={{ flexGrow: 1 }}
                            >
                              Join {club.title}
                            </Typography>
                            <Button
                              color="secondary"
                              onClick={() => {
                                setOpen(false);
                              }}
                            >
                              <CloseIcon />
                            </Button>
                          </div>
                        </DialogTitle>
                        <DialogContent dividers>
                          <Typography variant="h6" align="center">
                            Please sign in to join.
                          </Typography>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                )}
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </Paper>
  );
};
export default ClubDetails;
