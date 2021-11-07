import * as api from "../api/experience";
import { FETCH_ALL, CREATE, LIKE } from "../constants/actionTypes";

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

export const likeExp = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  try {
    const { data } = await api.likeExp(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
