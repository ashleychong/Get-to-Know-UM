import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container, createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { useSelector } from "react-redux";

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import UserProfile from './components/Profile/UserProfile';
import Forum from './components/Forum/Forum';
import TopicDetails from './components/Forum/TopicDetails/TopicDetails';
import Courses from "./components/Courses/CoursesHome";
import Events from "./components/Events/Events";
import EventDetails from './components/Events/EventDetails/EventDetails';
import ExperienceRank from "./components/Leisure/ExperienceRank/Ranking/ExperienceRank";
import Layout from "./components/Layout";
import ClubTab from "./components/manageClub/ClubTab/Tab";
import EventTab from "./components/manageEvent/EventTab/Tab";
import Food from "./components/Food/Food";
import AdminFoodNomination from "./components/Admin/Food/FoodNominationPage";
import FoodNominationDetails from "./components/Admin/Food/FoodNominationDetails";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
});

function App() {
  const user = useSelector((state) => state.auth.authData);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {user?.result?.role !== "admin" && <Header title="Get to Know UM" />}
        <Switch>
          <Route
            path="/"
            exact
            component={() =>
              user?.result?.role === "admin" ? (
                <Courses />
              ) : (
                <Redirect to="/home" />
              )
            }
          />
          {/* <Route path="/" exact component={() => <Redirect to="/home" />} /> */}
          <Route path="/home" exact component={Home} />
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/home" />)}
          />
          {/* <Layout> */}
            {/* <Route path="/" exact component={ClubTab} /> */}
            <Redirect exact from="/club" to="/club/list" />
            <Route path="/club/:page?" component={ClubTab} />
            <Redirect exact from="/event" to="/event/list" />
            <Route path="/event/:page?" exact component={EventTab} />
            {/* <Route path="/courses" exact component={Courses} /> */}
          {/* </Layout> */}
          <Route path="/userProfile" exact component={UserProfile} />
          <Route path="/forum" exact component={Forum} />
          <Route path="/forum/:topicId" exact component={TopicDetails} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/food" exact component={Food} />
          <Redirect exact from="/gtkum" to="/gtkum/event" />
          <Route path="/gtkum/event" exact component={Events} />
          <Route path="/gtkum/event/search" exact component={Events} />
          <Route path="/gtkum/event/:id" exact component={EventDetails} />
          <Route path="/gtkum/leisure" exact component={ExperienceRank} />
          <Route path="/admin/foodNomination" exact component={AdminFoodNomination} />
          <Route path="/admin/foodNomination/:foodNominationId" exact component={FoodNominationDetails} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
