import * as api from "../api/index.js";
import {
  START_LOADING,
  END_LOADING,
  FETCH_CLUB_REVIEWS,
  CREATE_CLUB_REVIEW,
  UPDATE_CLUB_REVIEW,
  DELETE_CLUB_REVIEW,
} from "../constants/actionTypes.js";
import { UPDATE_CLUB, FETCH_CLUB } from "../constants/actionTypes.js";

export const getClubReviews = (clubId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchClubReviews(clubId);

    dispatch({ type: FETCH_CLUB_REVIEWS, payload: { clubId, data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createClubReview = (clubId, review) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const {
      data: { newClubReview, updatedClub },
    } = await api.createClubReview(clubId, review);

    dispatch({ type: UPDATE_CLUB, payload: updatedClub });
    dispatch({ type: FETCH_CLUB, payload: { club: updatedClub } });
    dispatch({
      type: CREATE_CLUB_REVIEW,
      payload: { clubId, data: newClubReview },
    });
    console.log(clubId);

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const updateClubReview =
  (clubId, reviewId, updatedReview) => async (dispatch) => {
    try {
      const {
        data: { updatedClubReview, updatedClub },
      } = await api.updateClubReview(clubId, reviewId, updatedReview);

      dispatch({ type: UPDATE_CLUB, payload: updatedClub });
      dispatch({ type: FETCH_CLUB, payload: { club: updatedClub } });
      dispatch({
        type: UPDATE_CLUB_REVIEW,
        payload: { clubId, reviewId, data: updatedClubReview },
      });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteClubReview = (clubId, reviewId) => async (dispatch) => {
  try {
    const {
      data: { updatedClub },
    } = await api.deleteClubReview(clubId, reviewId);

    dispatch({ type: UPDATE_CLUB, payload: updatedClub });
    dispatch({ type: FETCH_CLUB, payload: { club: updatedClub } });
    dispatch({ type: DELETE_CLUB_REVIEW, payload: { clubId, reviewId } });
  } catch (error) {
    console.log(error);
  }
};
