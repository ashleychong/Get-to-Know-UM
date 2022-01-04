import {
  AUTH,
  AUTH_START_LOADING,
  AUTH_END_LOADING,
  LOGIN_FAIL,
  SIGNUP_FAIL,
  CLEAR_ERROR_AND_MESSAGE,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  LOGOUT,
  UPDATE_PROFILE,
  UPDATE_PASSWORD,
  SENT_RESET_PASSWORD_EMAIL_SUCCESS,
  SENT_RESET_PASSWORD_EMAIL_FAIL,
} from "../constants/actionTypes";

const authReducer = (state = { authData: JSON.parse(localStorage.getItem("profile")) }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action.data,
        loading: false,
        errors: null,
        message: null,
      };
    case AUTH_START_LOADING:
      return { ...state, isLoading: true };
    case AUTH_END_LOADING:
      return { ...state, isLoading: false };
    case SIGNUP_FAIL:
      return { ...state, errors: action.payload };
    case LOGIN_FAIL:
      return { ...state, errors: action.payload };
    case SENT_RESET_PASSWORD_EMAIL_FAIL:
    case UPDATE_PASSWORD_FAIL:
      return { ...state, errors: action.payload };
    case SENT_RESET_PASSWORD_EMAIL_SUCCESS:
    case UPDATE_PASSWORD_SUCCESS:
      return { ...state, message: action.payload, errors: null };
    case CLEAR_ERROR_AND_MESSAGE:
      return { ...state, message: null, errors: null };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        authData: null,
        loading: false,
        errors: null,
        message: null,
      };
    case UPDATE_PROFILE:
      localStorage.setItem(
        "profile",
        JSON.stringify({ ...state.authData, result: action?.data })
      );
      return {
        ...state,
        authData: { ...state.authData, result: action.data },
      };
    case UPDATE_PASSWORD:
      localStorage.setItem(
        "profile",
        JSON.stringify({ ...state.authData, result: action?.data })
      );
      return {
        ...state,
        authData: { ...state.authData, result: action.data },
      };
    default:
      return state;
  }
};

export default authReducer;
