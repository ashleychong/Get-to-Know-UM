import * as api from "../api/leisure";
import {
  CREATE_LEISURE,
  DELETE_LEISURE,
  FETCH_ALL_LEISURE,
  UPDATE_LEISURE,
  FETCH_LEISURE_TABLE,
} from "../constants/leisureActionTypes";

export const getLeisures = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLeisures();
    dispatch({ type: FETCH_ALL_LEISURE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getLeisureTable = (user) => async (dispatch) => {
  try {
    const { data } = await api.fetchLeisureTable(user);
    dispatch({ type: FETCH_LEISURE_TABLE, payload: data });
  } catch (error) {
    console.log(error.response);
  }
};

export const createLeisure = (leisure) => async (dispatch) => {
  try {
    const { data } = await api.createLeisures(leisure);
    dispatch({ type: CREATE_LEISURE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateLeisure = (id, leisure) => async (dispatch) => {
  try {
    const { data } = await api.updateLeisure(id, leisure);
    dispatch({ type: UPDATE_LEISURE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteLeisure = (id) => async (dispatch) => {
  try {
    await api.deleteLeisure(id);
    dispatch({ type: DELETE_LEISURE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
