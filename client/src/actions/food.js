import * as api from "../api/index.js";
import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL_FOOD,
  FETCH_FOOD,
  CREATE_FOOD,
  UPDATE_FOOD,
  DELETE_FOOD,
  VOTE_FOOD,
} from "../constants/foodActionTypes.js";

export const getAllFood = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchAllFood();

    dispatch({ type: FETCH_ALL_FOOD, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getFood = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchFood(id);
    dispatch({ type: FETCH_FOOD, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createFood = (newFood) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createFood(newFood);
    dispatch({ type: CREATE_FOOD, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const updateFood = (id, updatedFood) => async (dispatch) => {
  try {
    const { data } = await api.updateFood(id, updatedFood);
    dispatch({ type: UPDATE_FOOD, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteFood = (id) => async (dispatch) => {
  try {
    await api.deleteFood(id);
    dispatch({ type: DELETE_FOOD, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const voteFood = (id) => async (dispatch) => {
  try {
    const { data } = await api.voteFood(id);

    dispatch({ type: VOTE_FOOD, payload: data });
  } catch (error) {
    console.log(error);
  }
};
