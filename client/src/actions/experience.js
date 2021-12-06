import * as api from "../api/experience";
import { FETCH_ALL, CREATE, LIKE } from "../constants/actionTypes";
import {
  UPDATE_EXP,
  FETCH_EXP_TABLE,
  DELETE_EXP,
} from "../constants/leisureActionTypes";

export const getExps = () => async (dispatch) => {
  try {
    const { data } = await api.fetchExps();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getExpTable = (user) => async (dispatch) => {
  try {
    const { data } = await api.fetchExpTable(user);
    dispatch({ type: FETCH_EXP_TABLE, payload: data });
  } catch (error) {
    console.log(error.response);
  }
};

export const createExp = (exp) => async (dispatch) => {
  try {
    const { data } = await api.createExp(exp);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeExp = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  try {
    const { data } = await api.likeExp(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateExp = (id, exp) => async (dispatch) => {
  try {
    const { data } = await api.updateExp(id, exp);
    dispatch({ type: UPDATE_EXP, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteExp = (id) => async (dispatch) => {
  try {
    await api.deleteExp(id);
    dispatch({ type: DELETE_EXP, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
