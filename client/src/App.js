import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  Container,
  createTheme,
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
import CourseDetails from "./components/Courses/CourseDetails.js/CourseDetails";
import AdminCourseHome from "./components/Admin/Courses/CoursesHome";
import EventHomePage from "./components/Events/EventHomePage";
import Events from "./components/Events/Events";
import EventDetails from "./components/Events/EventDetails/EventDetails";
import ExperienceRank from "./components/Leisure/ExperienceRank/Ranking/ExperienceRank";
import Layout from "./components/Layout";
import ClubHome from "./components/manageClub/ClubHome";
import EventHome from "./components/manageEvent/EventHome";
import Food from "./components/Food/FoodHome";
import AdminFoodNomination from "./components/Admin/Food/AdminFoodHome";
import FoodNominationDetails from "./components/Admin/Food/FoodNominationDetails";
import AdminCafeHome from "./components/Admin/Cafe/AdminCafeHome";
import CafeDetails from "./components/Cafe/CafeDetails/CafeDetails";
import CafeHome from "./components/Cafe/CafeHome";
import Calc from "./components/GPA/calculator";
import Leisure from "./components/Leisure/Leisure";
import LeisureCategory from "./components/Leisure/LeisureCategory";
import ClubHomePage from "./components/Clubs/ClubHomePage";
import ClubDetails from "./components/Clubs/ClubDetails/ClubDetails";
import GPACalHome from "./components/GPA/GPACalHome";
import LeisureHome from "./components/manageLeisure/LeisureHome";
import ExpHome from "./components/manageExp/ExpHome";
import FavEvent from "./components/Events/FavEvent";
import ForumReportsHome from "./components/Admin/ForumReports/ForumReportsHome";
import RequestResetPassword from "./components/Auth/RequestResetPassword";
import VerifyResetPasswordLink from "./components/Auth/VerifyResetPasswordLink";
import ResetPasswordError from "./components/Auth/ResetPasswordError";
import NotFound from "./components/ErrorPage/404";

const theme = createTheme({
  typography: {
    fontFamily: "Nunito Sans",
  },
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
  const isAdmin = user?.result?.role === "admin";

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {user?.result?.role !== "admin" && <Header title="Get to Know UM" />}
        <>
          {isAdmin ? (
            <Switch>
              <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/admin/courses" />)} />
              <Route path="/" exact component={() => <Redirect to="/admin/courses" />} />
              <Route path="/admin/profile" exact component={UserProfile} />
              <Route path="/admin/club/:page?" component={ClubHome} />
              <Route path="/admin/event" exact component={EventHome} />
              <Route path="/admin/leisure" exact component={LeisureHome} />
              <Route path="/admin/exp" exact component={ExpHome} />
              <Route path="/admin/courses" exact component={AdminCourseHome} />
              <Route path="/admin/courses/search" exact component={AdminCourseHome} />
              <Route path="/admin/foodNominations" exact component={AdminFoodNomination} />
              <Route path="/admin/foodNominations/:foodNominationId" exact component={FoodNominationDetails} />
              <Route path="/admin/cafe" exact component={AdminCafeHome} />
              <Route path="/admin/foodNomination" exact component={AdminFoodNomination} />
              <Route path="/admin/foodNomination/:foodNominationId" exact component={FoodNominationDetails} />
              <Route path="/admin/forumReports" exact component={ForumReportsHome} />
              <Route path="/forum/:topicId" exact component={TopicDetails} />
              <Route path="/notFound" component={NotFound} />
              <Route path="*" exact component={() => <Redirect to="/notFound" />} /> 
            </Switch>
          ) : (
            <Switch>
              <Route path="/home" exact component={Home} />
              <Route path="/" exact component={() => <Redirect to="/home" />} />
              <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/home" />)} />
              <Route path="/passwordResetRequest" component={RequestResetPassword} />
              <Route path="/passwordReset" component={VerifyResetPasswordLink} />
              <Route path="/passwordResetError" component={ResetPasswordError} />  
              <Route path="/profile" exact component={UserProfile} />
              <Route path="/forum" exact component={Forum} />
              <Route path="/forum/search" exact component={Forum} />
              <Route path="/forum/:topicId" exact component={TopicDetails} />
              <Route path="/courses" exact component={Courses} />
              <Route path="/courses/search" exact component={Courses} />
              <Route path="/courses/:courseId" exact component={CourseDetails} />
              <Route path="/food" exact component={Food} />
              <Route path="/event" exact component={EventHomePage} />
              <Route path="/event/search" exact component={EventHomePage} />
              <Route path="/event/fav" exact component={FavEvent} />
              <Route path="/cafe/:cafeId" exact component={CafeDetails} />
              <Route path="/cafe" exact component={CafeHome} />
              <Route path="/event/:id" exact component={EventDetails} />

              <Route path="/gpa" exact component={GPACalHome} />
              <Route path="/leisure" exact component={Leisure} />
              <Route path="/leisure/ranking" exact component={ExperienceRank} />
              <Route path="/leisure/inUM" exact component={LeisureCategory} />
              <Route path="/leisure/nearUM" exact component={LeisureCategory} />
              <Route path="/club" exact component={ClubHomePage} />
              <Route path="/club/search" exact component={ClubHomePage} />
              <Route path="/club/:clubId" exact component={ClubDetails} />
              <Route path="/notFound" component={NotFound} />
              <Route path="*" exact component={() => <Redirect to="/notFound" />} />  
            </Switch>
          )}
          <Route path="/" exact component={() => isAdmin ? ( <AdminCourseHome /> ) : ( <Redirect to="/home" /> )}/>
          {/* <Route path="/" exact component={() => <Redirect to="/home" />} /> */}
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
