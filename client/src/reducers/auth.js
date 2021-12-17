import { AUTH, LOGIN_FAIL, SIGNUP_FAIL ,LOGOUT, UPDATE_PROFILE, UPDATE_PASSWORD } from "../constants/actionTypes";

const authReducer = (state = { authData: JSON.parse(localStorage.getItem("profile")) }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, errors: null };
    case SIGNUP_FAIL:
      return { ...state, errors: action.payload };
    case LOGIN_FAIL:
      return { ...state, errors: action.payload };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
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
