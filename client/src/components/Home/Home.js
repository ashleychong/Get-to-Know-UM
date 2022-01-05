import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  ButtonBase,
  Button,
  CardHeader,
  CardActions,
} from "@material-ui/core/";
import Header from "../Header/Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";
import chancellery from "../../assets/images/gate.jpg";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: "Welcome to the University of Malaya!",
  description: "",
  image: chancellery,
  imgText: "",
  linkText: "",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

const features1 = [
  {
    title: "Forum",
    description:
      "Communicate and discuss with friends. Ask questions or help to answer doubts.",
    icon: "https://cdn-icons-png.flaticon.com/512/745/745205.png",
    link: "/forum",
  },
  {
    title: "Club",
    description: "Get information related to clubs of University of Malaya.",
    icon: "https://cdn-icons-png.flaticon.com/512/4629/4629699.png",
    link: "/club",
  },
  {
    title: "Event",
    description: "Access a variety of events to enrich your univesity life.",
    icon: "https://cdn-icons-png.flaticon.com/512/3771/3771178.png",
    link: "/event",
  },
  {
    title: "Leisure",
    description: "Remember to spend some time to do the leisure activities.",
    icon: "https://cdn-icons-png.flaticon.com/512/3271/3271106.png",
    link: "/leisure",
  },
];

const features2 = [
  {
    title: "Food",
    description: "Sharing is caring. Share the best food in UM with UM folks.",
    icon: "https://cdn-icons-png.flaticon.com/512/706/706164.png",
    link: "/food",
  },
  {
    title: "Course",
    description: "Know more about the courses offer by UM and leave a review.",
    icon: "https://cdn-icons-png.flaticon.com/512/2000/2000920.png",
    link: "/courses",
  },
  {
    title: "Calculator",
    description: "Calculate your grade point average and plan your result.",
    icon: "https://cdn-icons-png.flaticon.com/512/2374/2374370.png",
    link: "/gpa",
  },
];

export default function Blog() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Header title="Get to Know UM"/> */}
        <Box pt={5}>
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
          </main>
        </Box>
        <Box pt={5}>
          <Typography
            variant="h4"
            style={{
              fontFamily: "Segoe UI",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            Our Best Features
          </Typography>
          <Grid container spacing={5} alignItems="flex-end" style={{}}>
            {features1.map((feature) => (
              <Grid item key={feature.title} xs={12} md={3}>
                <ButtonBase onClick={() => history.push(feature.link)}>
                  <Card style={{ borderRadius: "15px" }}>
                    <CardContent style={{ padding: "20px" }}>
                      <Typography
                        variant="h5"
                        style={{
                          color: "#1565c0",
                          fontWeight: "bold",
                          marginBottom: "5px",
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Box style={{ height: "80px" }}>
                        <Typography
                          variant="subtitle1"
                          style={{ lineHeight: "1.4", textAlign: "justify" }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                      <CardMedia
                        component="img"
                        style={{
                          height: "60px",
                          width: "60px",
                          objectFit: "cover",
                          margin: "auto",
                        }}
                        image={feature.icon}
                        alt={feature.title}
                      />
                    </CardContent>
                  </Card>
                </ButtonBase>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={5} alignItems="flex-end">
            {features2.map((feature) => (
              <Grid item key={feature.title} xs={12} md={3}>
                <ButtonBase onClick={() => history.push(feature.link)}>
                  <Card style={{ borderRadius: "15px" }}>
                    <CardContent style={{ padding: "20px" }}>
                      <Typography
                        variant="h5"
                        style={{
                          color: "#1565c0",
                          fontWeight: "bold",
                          marginBottom: "5px",
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Box style={{ height: "80px" }}>
                        <Typography
                          variant="subtitle1"
                          style={{ lineHeight: "1.4", textAlign: "justify" }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                      <CardMedia
                        component="img"
                        style={{
                          height: "60px",
                          width: "60px",
                          objectFit: "cover",
                          margin: "auto",
                        }}
                        image={feature.icon}
                        alt={feature.title}
                      />
                    </CardContent>
                  </Card>
                </ButtonBase>
              </Grid>
            ))}
          </Grid>
        </Box>
        <div style={{ marginBottom: "40px" }}></div>
      </Container>
      <Footer title="" description="" />
    </React.Fragment>
  );
}
