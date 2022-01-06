import * as api from "../api/courses.js";
import {
  START_LOADING,
  END_LOADING,
  FETCH_COURSES,
  FETCH_COURSES_BY_PAGE,
  FETCH_COURSES_BY_SEARCH,
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

export const getCoursesByPage = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const {
      data: { data, currentPage, numberOfPages },
    } = await api.fetchCoursesByPage(page);

    dispatch({
      type: FETCH_COURSES_BY_PAGE,
      payload: { data, currentPage, numberOfPages },
    });
    dispatch({ type: END_LOADING });
    
  } catch (error) {
    console.log(error);
  }
};

export const getCoursesBySearch = (searchQuery) => async (dispatch) => {
  try {
    // console.log(searchQuery);

    dispatch({ type: START_LOADING });
    const { data } = await api.fetchCoursesBySearch(searchQuery);
    // console.log(data);

    dispatch({ type: FETCH_COURSES_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getCourse = (id, router) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchCourse(id);
    dispatch({ type: FETCH_COURSE, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
    router.push("/notFound");
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
