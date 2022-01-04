import {
  AUTH,
  AUTH_START_LOADING,
  AUTH_END_LOADING,
  LOGIN_FAIL,
  SIGNUP_FAIL,
  UPDATE_PROFILE,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_FAIL,
  CLEAR_ERROR_AND_MESSAGE,
  UPDATE_PASSWORD_SUCCESS,
  REQUEST_RESET_PASSWORD,
  RESET_PASSWORD,
  SENT_RESET_PASSWORD_EMAIL_SUCCESS,
  SENT_RESET_PASSWORD_EMAIL_FAIL,
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
try {
    const { data } = await api.signUp(formData);
    // console.log(data);

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

export const requestResetPassword = (formData) => async (dispatch) => {
  try {
    dispatch({ type: CLEAR_ERROR_AND_MESSAGE });
    
    const { data: { message } } = await api.requestResetPassword(formData);
    // console.log("request reset password action");
    // console.log(message);

    dispatch({ type: SENT_RESET_PASSWORD_EMAIL_SUCCESS, payload: message });

  } catch (error) {
    console.log(error.response);
    if (error.response) {
      dispatch({
        type: SENT_RESET_PASSWORD_EMAIL_FAIL,
        payload: error.response.data,
      });
      console.log("error", error.response.data);
    }
  }
};

export const verifyResetPasswordToken = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_START_LOADING });

    const { data: { message } } = await api.verifyResetPasswordToken(formData);
    // console.log(message);

  } catch (error) {
    const errorMsg = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    console.log(errorMsg);
    router.push("/passwordResetError");
  } finally {
    dispatch({ type: AUTH_END_LOADING });
  }
};

export const resetPassword = (formData) => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR_AND_MESSAGE });
  try {
    const {
      data: { updatedUser, message },
    } = await api.resetPassword(formData);

    // console.log("reset password actions");
    // console.log(updatedUser);

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: message });
  } catch (error) {
    console.log(error);

    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProfileImage = (userId, formData) => async (dispatch) => {
  try {
    const { data } = await api.updateProfileImage(userId, formData);
    // console.log(data);
    dispatch({ type: UPDATE_PROFILE, data });
  } catch (error) {
    console.log(error);
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
  dispatch({ type: CLEAR_ERROR_AND_MESSAGE });
  try {
    const {
      data: { updatedUser, message },
    } = await api.updatePassword(userId, formData);
    // console.log("update password actions");
    // console.log(updatedUser);
    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: message });
    dispatch({ type: UPDATE_PASSWORD, data: updatedUser });
  } catch (error) {
    console.log(error);

    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
