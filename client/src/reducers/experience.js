import { FETCH_ALL, CREATE, LIKE } from "../constants/actionTypes";
import {
  UPDATE_EXP,
  DELETE_EXP,
  FETCH_EXP_TABLE,
  START_LOADING,
  END_LOADING,
} from "../constants/leisureActionTypes";

export default (state = { isLoading: true, exps: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return { ...state, exps: action.payload };
    case CREATE:
      return { ...state, exps: [...state.exps, action.payload] };
    case LIKE:
      return {
        ...state,
        exps: state.exps.map((exp) =>
          exp._id === action.payload._id ? action.payload : exp
        ),
      };
    case UPDATE_EXP:
      return {
        ...state,
        exps: state.exps.map((exp) =>
          exp._id === action.payload._id ? action.payload : exp
        ),
      };
    case DELETE_EXP:
      return {
        ...state,
        exps: state.exps.filter((exp) => exp._id !== action.payload),
      };
    case FETCH_EXP_TABLE:
      return {
        ...state,
        exps: action.payload,
      };
    default:
      return state;
  }
};
