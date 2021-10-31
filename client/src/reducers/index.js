import { combineReducers } from "redux";

import auth from "./auth";
import topics from "./topics";
import courses from "./courses";
import events from "./events";
import clubs from "./clubs";
import experience from "./experience";
import foodNominations from "./foodNominations";
import food from "./food";
import gpa from "./gpa";
import leisures from "./leisure";

export const reducers = combineReducers({
  auth,
  topics,
  courses,
  events,
  clubs,
  experience,
  foodNominations,
  food,
  gpa,
  leisures,
});
