import * as api from "../api/index.js";
import {
  START_LOADING,
  END_LOADING,
  FETCH_CAFE_REVIEWS,
  CREATE_CAFE_REVIEW,
  UPDATE_CAFE_REVIEW,
  DELETE_CAFE_REVIEW,
} from "../constants/cafeActionTypes.js";
import { UPDATE_CAFE, FETCH_CAFE } from "../constants/cafeActionTypes.js";

export const getCafeReviews = (cafeId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchCafeReviews(cafeId);

    dispatch({ type: FETCH_CAFE_REVIEWS, payload: { cafeId, data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createCafeReview = (cafeId, review) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const {
      data: { newCafeReview, updatedCafe },
    } = await api.createCafeReview(cafeId, review);

    dispatch({ type: UPDATE_CAFE, payload: updatedCafe });
    dispatch({ type: FETCH_CAFE, payload: { cafe: updatedCafe } });
    dispatch({
      type: CREATE_CAFE_REVIEW,
      payload: { cafeId, data: newCafeReview },
    });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const updateCafeReview = (cafeId, reviewId, updatedReview) => async (dispatch) => {
    try {
      const { data: {updatedCafeReview, updatedCafe} } = await api.updateCafeReview(
        cafeId,
        reviewId,
        updatedReview
      );

      dispatch({ type: UPDATE_CAFE, payload: updatedCafe });
      dispatch({ type: FETCH_CAFE, payload: { cafe: updatedCafe } });
      dispatch({
        type: UPDATE_CAFE_REVIEW,
        payload: { cafeId, reviewId, data:updatedCafeReview },
      });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteCafeReview = (cafeId, reviewId) => async (dispatch) => {
  try {
    const { data: { updatedCafe } } = await api.deleteCafeReview(cafeId, reviewId);

    dispatch({ type: UPDATE_CAFE, payload: updatedCafe });
    dispatch({ type: FETCH_CAFE, payload: { cafe: updatedCafe } });
    dispatch({ type: DELETE_CAFE_REVIEW, payload: { cafeId, reviewId } });

  } catch (error) {
    console.log(error);
  }
};
