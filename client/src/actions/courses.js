// import * as api from "../api/index.js";
import * as api from "../api/courses.js";
import {
  START_LOADING,
  END_LOADING,
  FETCH_COURSES,
  FETCH_COURSE,
  CREATE_COURSE,
  UPDATE_COURSE,
  DELETE_COURSE,
} from "../constants/courseActionTypes";

export const getCourses = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchCourses();
    dispatch({ type: FETCH_COURSES, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getCourse = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchCourse(id);
    dispatch({ type: FETCH_COURSE, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createCourse = (newCourse) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createCourse(newCourse);
    dispatch({ type: CREATE_COURSE, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const updateCourse = (id, updatedCourse) => async (dispatch) => {
  try {
    const { data } = await api.updateCourse(id, updatedCourse);
    dispatch({ type: UPDATE_COURSE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
    await api.deleteCourse(id);
    dispatch({ type: DELETE_COURSE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
