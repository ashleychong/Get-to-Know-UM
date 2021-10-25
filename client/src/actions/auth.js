import { AUTH, UPDATE_PROFILE, UPDATE_PASSWORD } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signIn = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
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
  try {
    const { data } = await api.updatePassword(userId, formData);
    dispatch({ type: UPDATE_PASSWORD, data });
    
  } catch (error) {
    console.log(error);
  }
};