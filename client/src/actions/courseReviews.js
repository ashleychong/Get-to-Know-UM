import * as api from "../api/courses.js";
import {
  START_LOADING,
  END_LOADING,
  FETCH_COURSE_REVIEWS,
  CREATE_COURSE_REVIEW,
  UPDATE_COURSE_REVIEW,
  DELETE_COURSE_REVIEW,
} from "../constants/courseActionTypes.js";
import { UPDATE_COURSE, FETCH_COURSE } from "../constants/courseActionTypes.js";

export const getCourseReviews = (courseId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchCourseReviews(courseId);

    dispatch({ type: FETCH_COURSE_REVIEWS, payload: { courseId, data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createCourseReview = (courseId, review) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const {
      data: { newCourseReview, updatedCourse },
    } = await api.createCourseReview(courseId, review);

    dispatch({ type: UPDATE_COURSE, payload: updatedCourse });
    dispatch({ type: FETCH_COURSE, payload: updatedCourse });
    dispatch({
      type: CREATE_COURSE_REVIEW,
      payload: { courseId, data: newCourseReview },
    });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const updateCourseReview = (courseId, reviewId, updatedReview) => async (dispatch) => {
    try {
      const {
        data: { updatedCourseReview, updatedCourse },
      } = await api.updateCourseReview(courseId, reviewId, updatedReview);

      dispatch({ type: UPDATE_COURSE, payload: updatedCourse });
      dispatch({ type: FETCH_COURSE, payload: updatedCourse });
      dispatch({
        type: UPDATE_COURSE_REVIEW,
        payload: { courseId, reviewId, data: updatedCourseReview },
      });
    } catch (error) {
      console.log(error);
    }
  };


  export const deleteCourseReview = (courseId, reviewId) => async (dispatch) => {
    try {
      const {
        data: { updatedCourse },
      } = await api.deleteCourseReview(courseId, reviewId);

      dispatch({ type: UPDATE_COURSE, payload: updatedCourse });
      dispatch({ type: FETCH_COURSE, payload: updatedCourse });
      dispatch({ type: DELETE_COURSE_REVIEW, payload: { courseId, reviewId } });
    } catch (error) {
      console.log(error);
    }
  };
