import * as api from "../api/index.js";
import {
  START_LOADING,
  END_LOADING,
  FETCH_CAFES,
  FETCH_CAFES_BY_PAGES,
  FETCH_CAFE,
  CREATE_CAFE,
  UPDATE_CAFE,
  DELETE_CAFE,
} from "../constants/cafeActionTypes.js";

export const getAllCafes = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchAllCafes();

    dispatch({ type: FETCH_CAFES, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getAllCafesByPages = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const {
      data: { data, currentPage, numberOfPages },
    } = await api.fetchAllCafesByPages(page);

    dispatch({
      type: FETCH_CAFES_BY_PAGES,
      payload: { data, currentPage, numberOfPages },
    });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getCafe = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchCafe(id);
    dispatch({ type: FETCH_CAFE, payload: { cafe: data } });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createCafe = (cafe, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createCafe(cafe);
    dispatch({ type: CREATE_CAFE, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const updateCafe = (id, cafe) => async (dispatch) => {
  try {
    const { data } = await api.updateCafe(id, cafe);
    dispatch({ type: UPDATE_CAFE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCafe = (id) => async (dispatch) => {
  try {
    await api.deleteCafe(id);
    dispatch({ type: DELETE_CAFE, payload: id });
  } catch (error) {
    console.log(error);
  }
};