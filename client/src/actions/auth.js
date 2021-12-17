import {
  AUTH,
  LOGIN_FAIL,
  SIGNUP_FAIL,
  UPDATE_PROFILE,
  UPDATE_PASSWORD,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signIn = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);

    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signUp = (formData, router) => async (dispatch) => {
  // await api
  //   .signUp(formData)
  //   .then(({ data }) => {
  //     dispatch({ type: AUTH, data });
  //     router.push("/");
  //   })
  //   .catch((error) => {
  //     console.log("error in signing up");
  //     console.log(error.response.data.message);
  //       dispatch({
  //         type: SIGNUP_FAIL,
  //         payload:
  //           error.response && error.response.data.message
  //             ? error.response.data.message
  //             : error.message,
  //       });
  //   });

  try {
    const { data } = await api.signUp(formData);
    console.log(data);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error.response);
    if (error.response) {
      dispatch({
        type: SIGNUP_FAIL,
        payload: error.response.data,
      });
      console.log("error", error.response.data);
    }
  }
};

export const updateProfile = (userId, formData) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(userId, formData);
    dispatch({ type: UPDATE_PROFILE, data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = (userId, formData) => async (dispatch) => {
  try {
    const { data } = await api.updatePassword(userId, formData);
    dispatch({ type: UPDATE_PASSWORD, data });
  } catch (error) {
    console.log(error);
  }
};
