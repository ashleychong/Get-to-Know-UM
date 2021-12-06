import { FETCH_ALL, CREATE, LIKE } from "../constants/actionTypes";
import {
  UPDATE_EXP,
  DELETE_EXP,
  FETCH_EXP_TABLE,
} from "../constants/leisureActionTypes";

export default (exps = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...exps, action.payload];
    case LIKE:
      return exps.map((exp) =>
        exp._id === action.payload._id ? action.payload : exp
      );
    case UPDATE_EXP:
      return exps.map((exp) =>
        exp._id === action.payload._id ? action.payload : exp
      );
    case DELETE_EXP:
      return exps.filter((exp) => exp._id !== action.payload);
    case FETCH_EXP_TABLE:
      return action.payload;
    default:
      return exps;
  }
};
