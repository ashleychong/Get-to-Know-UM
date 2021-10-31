import * as api from "../api/index";
import { FETCH_ALL } from "../constants/actionTypes";

export const getGpa = () => async (dispatch) => {
  try {
    const { data } = await api.fetchGpa();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
