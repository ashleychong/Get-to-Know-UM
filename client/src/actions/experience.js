import * as api from "../api/experience";
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export const getExps = () => async (dispatch) => {
  try {
    const { data } = await api.fetchExps();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
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
