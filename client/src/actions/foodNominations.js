import * as api from "../api/index.js";
import {
  START_LOADING,
  END_LOADING,
  FETCH_FOOD_NOMINATIONS,
  FETCH_APPROVED_FOOD_NOMINATIONS,
  FETCH_FOOD_NOMINATION,
  CREATE_FOOD_NOMINATION,
  UPDATE_FOOD_NOMINATION,
  DELETE_FOOD_NOMINATION,
  APPROVE_FOOD_NOMINATION,
  DECLINE_FOOD_NOMINATION,
  VOTE_FOOD_NOMINATION,
} from "../constants/foodNominationActionTypes";

export const getFoodNominations = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchFoodNominations();
    
    dispatch({ type: FETCH_FOOD_NOMINATIONS, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getApprovedFoodNominations = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const {
      data: { data, currentPage, numberOfPages },
    } = await api.fetchApprovedFoodNominations(page);

    dispatch({
      type: FETCH_APPROVED_FOOD_NOMINATIONS,
      payload: { data, currentPage, numberOfPages },
    });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getFoodNomination = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchFoodNomination(id);
    dispatch({ type: FETCH_FOOD_NOMINATION, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createFoodNomination = (newFoodNomination) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createFoodNomination(newFoodNomination);
    dispatch({ type: CREATE_FOOD_NOMINATION, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};


export const updateFoodNomination = (id, updatedFoodNomination) => async (dispatch) => {
  try {
    const { data } = await api.updateFoodNomination(id, updatedFoodNomination);
    dispatch({ type: UPDATE_FOOD_NOMINATION, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteFoodNomination = (id) => async (dispatch) => {
  try {
    await api.deleteFoodNomination(id);
    dispatch({ type: DELETE_FOOD_NOMINATION, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const approveFoodNomimation = (id) => async (dispatch) => {
  try {
    const { data } = await api.approveFoodNomimation(id);
    dispatch({ type: APPROVE_FOOD_NOMINATION, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const declineFoodNomimation = (id) => async (dispatch) => {
  try {

    const { data } = await api.declineFoodNomimation(id);
    dispatch({ type: DECLINE_FOOD_NOMINATION, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const voteFoodNomination = (id) => async (dispatch) => {
  try {
    const { data } = await api.voteFoodNomimation(id);
    dispatch({ type: VOTE_FOOD_NOMINATION, payload: data });
    
  } catch (error) {
    console.log(error);
  }
};