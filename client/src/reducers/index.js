import { combineReducers } from "redux";

import auth from "./auth";
import topics from "./topics";
import courses from "./courses";
import events from "./events";
import clubs from "./clubs";
import exps from "./experience";
import foodNominations from "./foodNominations";
import food from "./food";
import umCourses from "./gpa";
import leisures from "./leisure";
import cafes from "./cafe";
import forumReports from "./forumReports";

export const reducers = combineReducers({
  auth,
  topics,
  forumReports,
  courses,
  events,
  clubs,
  exps,
  foodNominations,
  food,
  cafes,
  umCourses,
  leisures,
});
