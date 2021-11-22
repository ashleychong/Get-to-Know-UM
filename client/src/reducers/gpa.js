import { FETCH_COURSE_CAL } from "../constants/actionTypes";

export default (umCourses = [], action) => {
  switch (action.type) {
    case FETCH_COURSE_CAL:
      return action.payload;
    default:
      return umCourses;
  }
};
