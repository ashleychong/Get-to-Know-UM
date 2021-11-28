import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  Container,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import { useSelector } from "react-redux";

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import UserProfile from "./components/Profile/UserProfile";
import Forum from "./components/Forum/Forum";
import TopicDetails from "./components/Forum/TopicDetails/TopicDetails";
import Courses from "./components/Courses/CoursesHome";
import EventHomePage from "./components/Events/EventHomePage";
import EventDetails from "./components/Events/EventDetails/EventDetails";
import ExperienceRank from "./components/Leisure/ExperienceRank/Ranking/ExperienceRank";
import Layout from "./components/Layout";
import ClubHome from "./components/manageClub/ClubHome";
import EventHome from "./components/manageEvent/EventHome";
import Food from "./components/Food/Food";
import AdminFoodNomination from "./components/Admin/Food/FoodNominationPage";
import FoodNominationDetails from "./components/Admin/Food/FoodNominationDetails";
import Leisure from "./components/Leisure/Leisure";
import LeisureCategory from "./components/Leisure/LeisureCategory";
import ClubHomePage from "./components/Clubs/ClubHomePage";
import ClubDetails from "./components/Clubs/ClubDetails/ClubDetails";
import GPACalHome from "./components/GPA/GPACalHome";
import LeisureHome from "./components/manageLeisure/LeisureHome";

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
          <Route path="/admin/club/:page?" component={ClubHome} />
          <Route path="/admin/event" exact component={EventHome} />
          <Route path="/admin/leisure" exact component={LeisureHome} />
          {/* <Route path="/courses" exact component={Courses} /> */}
          {/* </Layout> */}
          <Route path="/userProfile" exact component={UserProfile} />
          <Route path="/forum" exact component={Forum} />
          <Route path="/forum/:topicId" exact component={TopicDetails} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/food" exact component={Food} />
          <Route path="/event" exact component={EventHomePage} />
          <Route path="/event/search" exact component={EventHomePage} />
          <Route path="/event/:id" exact component={EventDetails} />
          <Route path="/gpa" exact component={GPACalHome} />
          <Route path="/leisure" exact component={Leisure} />
          <Route path="/leisure/ranking" exact component={ExperienceRank} />
          <Route path="/leisure/inUM" exact component={LeisureCategory} />
          <Route path="/leisure/nearUM" exact component={LeisureCategory} />
          <Route path="/club" exact component={ClubHomePage} />
          <Route path="/club/search" exact component={ClubHomePage} />
          <Route path="/club/:id" exact component={ClubDetails} />
          <Route
            path="/admin/foodNomination"
            exact
            component={AdminFoodNomination}
          />
          <Route
            path="/admin/foodNomination/:foodNominationId"
            exact
            component={FoodNominationDetails}
          />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
