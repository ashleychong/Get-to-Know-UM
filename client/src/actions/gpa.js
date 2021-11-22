import * as api from "../api/gpa";
import { FETCH_COURSE_CAL } from "../constants/actionTypes";

export const getCourse = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCourse();
    dispatch({ type: FETCH_COURSE_CAL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
