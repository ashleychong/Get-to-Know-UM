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

export const reducers = combineReducers({
  auth,
  topics,
  courses,
  events,
  clubs,
  exps,
  foodNominations,
  food,
  umCourses,
  leisures,
});
